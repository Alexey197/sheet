import {rowsArr} from "../../model";

const inputsNumber = rowsArr[1].length

function createInputTemplate(index, value) {
    return `<input id="number" type="number" value="${value}" data-input="${index}">`
}

export function createInput(state = {}) {
    const inputs = []
    for (let i = 0; i < inputsNumber; i++) {
        inputs.push(createInputTemplate(i, state.inputState[i]))
    }

    return inputs.join('')
}
