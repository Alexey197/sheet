import {PriceComponent} from "../../core/PriceComponent";
import {createInput} from "./input.template";
import * as actions from "../../core/redux/actions";

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
        return createInput(this.store.getState())
    }
    
    init() {
        super.init()
        this.$subscribe(state => {
            console.log('InputState', state)
        })
        
        this.$on('button:click', () => {})
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
        this.$dispatch(actions.inputChange(data))
        const a = 'Hello'
        this.$emit('remember', a)
    }
}