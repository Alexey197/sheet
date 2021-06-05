import {textArr} from '../../model'

function createTextBanner(content) {
  return `
    <div class="tip">${content}</div>
  `
}

export function createText() {
  const text = []
  
  textArr.map(el => {
    text.push(createTextBanner(el))
  })
  return text.join('')
}
