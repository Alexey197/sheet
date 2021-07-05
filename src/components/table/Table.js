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
  
  onMouseover(event) {
    if (event.target.dataset.order !== '0') {
      const $target = $(event.target)
      const textArr = Array.from(document.querySelectorAll('.tip'))
      event.target.classList.add('selected')
      const $parent = $target.closest('[data-type="row"]')
      // const parent = event.target.parentNode.childNodes
      Array.from($parent.$el.children).map(el => {
        if (el.className !== 'selected') {
          el.classList.add('selected')
        }
      })
      textArr[event.target.dataset.order].style.display = 'block'
    }
  }
  
  onMouseout(event) {
    event.target.classList.remove('selected')
    const textArr = Array.from(document.querySelectorAll('.tip'))
    const $target = $(event.target)
    const $parent = $target.closest('[data-type="row"]')
    Array.from($parent.$el.children).map(el => {
      if (el.className !== 'selected') {
        el.classList.remove('selected')
      }
    })
    textArr[event.target.dataset.order].style.display = 'none'
  }
}
