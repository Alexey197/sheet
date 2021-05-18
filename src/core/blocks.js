import {template} from '../utils'
import {DomListeners} from './DomListeners'

class BlockComponent extends DomListeners {
  toHTML() {
    // return ''
    throw new Error('Метод toHTML должен быть реализован')
  }
}

class Block {
  constructor(value) {
    this.value = value
  }

  toHTML() {
    throw new Error('Метод toHTML должен быть реализован')
  }
}

export class CellBlock extends Block{
  constructor(value) {
    super(value)
  }
  
  toHTML() {
    const html = this.value.map(item => template('cell', item)).join('')
    return template('row', html)
  }
}

export class TextBlock extends Block{
  constructor(value) {
    super(value)
  }
  
  toHTML() {
    return template('tip', this.value)
  }
}
