import {assign, builtIn} from '../../shared'

type LinkTarget = '_blank' | '_parent' | '_self' | '_top'

type LinkType =
  | 'alternate '
  | 'author '
  | 'bookmark '
  | 'canonical '
  | 'dns-prefetch '
  | 'external '
  | 'expect '
  | 'help '
  | 'icon '
  | 'license '
  | 'manifest '
  | 'me '
  | 'modulepreload '
  | 'next '
  | 'nofollow '
  | 'noopener '
  | 'noreferrer '
  | 'opener '
  | 'pingback '
  | 'preconnect '
  | 'prefetch '
  | 'preload '
  | 'prerender '
  | 'prev '
  | 'privacy-policy '
  | 'search '
  | 'stylesheet '
  | 'tag '
  | 'terms-of-service'

@builtIn('a', 'web-anchor')
export class Anchor extends HTMLAnchorElement {
  override target!: LinkTarget

  override rel!: LinkType

  constructor(attrs: Partial<Anchor> = {}) {
    super()
    assign(this, attrs)
  }
}
