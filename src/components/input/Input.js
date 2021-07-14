import {PriceComponent} from "../../core/PriceComponent";
import {createInput} from "./input.template";

export class Input extends PriceComponent{
    constructor($root, options) {
        super($root, {
            name: 'Input',
            listeners: ['input'],
            ...options
        })
    }

    static className() {
        return 'input'
    }

    toHTML() {
        return createInput()
    }

    onInput(event) {
      console.log('Input', event.target.value)
    }
}