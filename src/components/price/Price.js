import {$} from '../../core/dom'

export class Price {
  constructor(selector, options) {
    this.$el = $(selector)
    this.components = options.components || []
  }
  getRoot() {
    const $root = $.create('div', 'sheet_table')
    
    this.components.forEach(Component => {
      const $el = $.create('div', Component.className())
      const component = new Component($el)
      $el.html(component.toHTML())
      $root.append($el)
    })
    return $root
  }
  
  render() {
    console.log(this.$el)
    this.$el.append(this.getRoot())
  }
}
