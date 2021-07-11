import {PriceComponent} from "../../core/PriceComponent";
import {createInput} from "./input.template";

export class Input extends PriceComponent{
    constructor($root) {
        super($root, {
            name: 'Input',
            listeners: ['input']
        })
    }

    static className() {
        return 'input'
    }

    toHTML() {
        return createInput()
    }

    onInput() {
      console.log('Input', this.$root)
    }
}