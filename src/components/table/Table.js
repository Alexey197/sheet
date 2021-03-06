import {PriceComponent} from '../../core/PriceComponent'
import {createTable} from './table.template'
import {$} from "../../core/dom";

export class Table extends PriceComponent{
  constructor($root, options) {
    super($root, {
      name: 'Table',
      listeners: ['mouseover', 'mouseout'],
      ...options
    })
  }

  static className() {
    return 'sheet_table'
  }
  toHTML() {
    return createTable()
  }
  
  init() {
    super.init()
    // this.$subscribe(state => {
    //     console.log('TableState', state)
    // })
  }
  
  onMouseover(event) {
    toggleHoverClass()
    this.$emit('table:mouseover', event.target.dataset.order)
  }

  onMouseout(event) {
    toggleHoverClass()
    this.$emit('table:mouseout', event.target.dataset.order)
  }
}

function toggleHoverClass() {
  if (event.target.dataset.order !== '0') {
    const $target = $(event.target)
    const $parent = $target.closest('[data-type="row"]')
    Array.from($parent.$el.children).map(el => {
      if (el.className !== 'selected') {
        el.classList.toggle('selected')
      }
    })
  }
}
