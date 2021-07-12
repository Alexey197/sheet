import {PriceComponent} from '../../core/PriceComponent'
import {createText} from './text.template'

export class Text extends PriceComponent{
  constructor($root, options) {
    super($root, {
      name: 'Text',
      listeners: [],
      ...options
    });
  }
  static className() {
    return 'tips'
  }
  
  toHTML() {
    return createText()
  }
  
  init() {
    super.init()
    const textArr = Array.from(this.$root.findAll('.tip'))
    
    this.emitter.subscribe('it is working', () => {
      if (event.target.dataset.order !== '0') {
        textArr[event.target.dataset.order].style.display = 'block'
      }
    })
  
    this.emitter.subscribe('it is not working', () => {
      textArr[event.target.dataset.order].style.display = 'none'
    })
  }
}
