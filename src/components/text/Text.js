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
    
    this.$on('table:mouseover', () => {
      if (event.target.dataset.order !== '0') {
        textArr[event.target.dataset.order].style.display = 'block'
      }
    })
  
    this.$on('table:mouseout', () => {
      textArr[event.target.dataset.order].style.display = 'none'
    })
    
    // this.$subscribe(state => {
    //   console.log('TextState', state)
    // })
  }
}
