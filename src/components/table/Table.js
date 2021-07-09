import {PriceComponent} from '../../core/PriceComponent'
import {createTable} from './table.template'
import {$} from "../../core/dom";

export class Table extends PriceComponent{
  constructor($root) {
    super($root, {
      name: 'Table',
      listeners: ['click', 'mouseover', 'mouseout']
    })
  }

  static className() {
    return 'sheet_table'
  }
  toHTML() {
    return createTable()
  }

  onClick(event) {
    console.log('Table: onClick', event.target)
    console.log(this.$root)
  }

  onMouseover() {
    toggleHoverClass('block')
  }

  onMouseout() {
    toggleHoverClass('none')
  }
}

function toggleHoverClass(displayType) {
  if (event.target.dataset.order !== '0') {
    const $target = $(event.target)
    const textArr = Array.from(document.querySelectorAll('.tip'))
    const $parent = $target.closest('[data-type="row"]')
    Array.from($parent.$el.children).map(el => {
      if (el.className !== 'selected') {
        el.classList.toggle('selected')
      }
    })
    textArr[event.target.dataset.order].style.display = displayType
  }
}
