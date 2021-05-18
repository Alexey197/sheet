import {PriceComponent} from '../../core/PriceComponent'

export class Text extends PriceComponent{
  // static className = 'tip'
  static className() {
    return 'tip'
  }
  
  toHTML() {
    return '<div>Text</div>'
  }
}
