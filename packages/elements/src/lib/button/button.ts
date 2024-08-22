import { assign, builtIn } from "../../shared";

@builtIn('button', 'web-button')
export class Button extends HTMLButtonElement {
  constructor(attrs: Partial<Button> = {}) {
    super()
    assign(this, attrs)
  }
}