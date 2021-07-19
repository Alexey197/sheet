import {PriceComponent} from "../../core/PriceComponent";
import {createButton} from "./button.template";

export class Button extends PriceComponent{
  constructor($root, options) {
    super($root, {
      name: 'Button',
      listeners: ['click'],
      ...options
    });
  }
  
  static className() {
    return 'reset'
  }
  
  toHTML() {
    return createButton()
  }
  
  onClick() {
    console.log('button clicked')
    this.$emit('button:click', () => {})
  }
}