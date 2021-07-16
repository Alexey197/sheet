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
    
    init() {
        super.init()
        this.$subscribe(state => {
            console.log('InputState', state)
        })
    }
    
    inputHandler() {
        const inputValues = Array.from((this.$root.findAll('#number')))
          .map(i => i.value)
        const inputObj = {...inputValues}
        console.log(inputObj);
        return inputObj
    }
    
    onInput() {
        const data = this.inputHandler()
        this.$dispatch({type: 'INPUT_CHANGE', data})
    }
}