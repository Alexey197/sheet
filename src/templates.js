export function row(block) {
  const html = block.value.map(item => `<div class="cell">${item}</div>`).join('')
  return `
    <div class="row">
      ${html}
    </div>
    <div class="tip tip-hidden">
      ${block.text}
    </div>
  `
}
