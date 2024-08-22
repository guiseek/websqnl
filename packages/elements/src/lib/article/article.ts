import {assign, builtIn} from '../../shared'

@builtIn('article', 'web-article')
export class Article extends HTMLElement {
  constructor(attrs: Partial<Article> = {}) {
    super()
    assign(this, attrs)
  }
}
