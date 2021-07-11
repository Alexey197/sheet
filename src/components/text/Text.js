import {PriceComponent} from '../../core/PriceComponent'
import {createText} from './text.template'

export class Text extends PriceComponent{
  constructor($root) {
    super($root, {
      name: 'Text',
      listeners: []
    });
  }
  static className() {
    return 'tips'
  }
  
  toHTML() {
    return createText()
  }
}
