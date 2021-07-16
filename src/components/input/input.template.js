import {rowsArr} from "../../model";

const inputsNumber = rowsArr[1].length

function createInputTemplate(index) {
    return `<input id="number" type="number" value="0" data-input="${index}">`
}

export function createInput() {
    const inputs = []
    for (let i = 0; i < inputsNumber; i++) {
        inputs.push(createInputTemplate(i))
    }
    
    return inputs.join('')
}