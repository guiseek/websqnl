import {DataSchema} from './interfaces'
import {async, throww} from './utils'

export class DataStore {
  constructor(
    private name: string,
    private version: number,
    private schemas: DataSchema[]
  ) {}

  open() {
    return async<IDBDatabase>((resolve, reject) => {
      const request = indexedDB.open(this.name, this.version)

      request.addEventListener('upgradeneeded', () => {
        const db = request.result

        const filterSchemas = ({name}: DataSchema) => {
          return db.objectStoreNames.contains(name) === false
        }

        this.schemas.filter(filterSchemas).map(({name, keyPath, indexes}) => {
          const collection = db.createObjectStore(name, {keyPath})

          indexes.map(({name, keyPath, unique}) => {
            collection.createIndex(name, keyPath, {unique})
          })
        })
      })

      request.addEventListener('success', () => resolve(request.result))
      request.addEventListener('error', () => reject(throww(request.error)))
    })
  }
}
