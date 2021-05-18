import {PriceComponent} from '../../core/PriceComponent'

export class Table extends PriceComponent{
  // static className = 'table'
  static className() {
    return 'table'
  }
  toHTML() {
    return '<div>Table</div>'
  }
}
