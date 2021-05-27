import {PriceComponent} from '../../core/PriceComponent'

export class Text extends PriceComponent{
  // static className = 'tip'
  constructor($root) {
    super($root, {
      name: 'Text',
      listeners: []
    });
  }
  static className() {
    return 'tip'
  }
  
  toHTML() {
    return '<div>Text</div>'
  }
}
