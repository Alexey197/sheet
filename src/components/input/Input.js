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
        // this.$subscribe(state => {
        //     console.log('InputState', state)
        // })
        
        this.$on('button:click', () => {})
    }
    
    inputHandler(event) {
        let input = event.target.dataset.input
        const inputObj = {}
        inputObj[input] = event.target.value
        return inputObj
    }
    
    onInput(event) {
        const data = this.inputHandler(event)
        
        this.$dispatch(actions.inputChange(data))
    }
}