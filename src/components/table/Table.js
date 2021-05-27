import {PriceComponent} from '../../core/PriceComponent'
import {createTable} from './table.template'

export class Table extends PriceComponent{
  // static className = 'table'
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
    console.log('Hover', event.target)
  }
  
  onMouseout(event) {
    console.log('Out', event.target)
  }
}
