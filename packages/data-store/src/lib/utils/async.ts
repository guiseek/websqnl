import {AsyncCallback} from '../interfaces/callback'

export const async = <T>(executor: AsyncCallback<T>) => {
  return new Promise<T>(executor)
}
