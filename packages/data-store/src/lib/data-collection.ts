import {DataObject} from './data-object'
import {Callback, DataObjectKey} from './interfaces'
import {async} from './utils'

export abstract class DataCollection<T extends DataObject> {
  constructor(private db: IDBDatabase, private name: string) {}

  #performTransaction(
    mode: IDBTransactionMode,
    callback: Callback<IDBObjectStore>
  ) {
    return async<void>((resolve, reject) => {
      const transaction = this.db.transaction(this.name, mode)
      const store = transaction.objectStore(this.name)

      transaction.addEventListener('complete', () => resolve())
      transaction.addEventListener('error', () => reject(transaction.error))

      callback(store)
    })
  }

  findAll() {
    return async<T[]>((resolve, reject) => {
      this.#performTransaction('readonly', (collection) => {
        const request = collection.getAll()

        request.addEventListener('success', () => resolve(request.result))
        request.addEventListener('error', () => reject(request.error))
      })
    })
  }

  createOne(item: T) {
    return this.#performTransaction('readwrite', (object) => object.add(item))
  }

  findOne<K extends DataObjectKey>(key: K) {
    return async<T>((resolve, reject) => {
      this.#performTransaction('readonly', (collection) => {
        const request = collection.get(key)

        request.addEventListener('success', () => resolve(request.result))
        request.addEventListener('error', () => reject(request.error))
      })
    })
  }

  delete<K extends DataObjectKey>(key: K) {
    return this.#performTransaction('readwrite', (collection) => {
      collection.delete(key)
    })
  }
}
