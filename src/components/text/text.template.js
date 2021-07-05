import {textArr} from '../../model'

function createTextBanner(content, index) {
  return `
    <div class="tip" data-text="${index}">${content}</div>
  `
}

export function createText() {
  const text = []
  
  textArr.map((el, index)=> {
    text.push(createTextBanner(el, index))
  })
  return text.join('')
}
