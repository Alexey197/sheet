const model = [
  {
    value: [
      '',
      `ПРЕМИАЛЬНЫЙ<br>(будет выполнен самыми лучшими материалам)`,
      'ОПТИМАЛЬНЫЙ<br>(лучшее соотношение цена/качество)',
      'БЮДЖЕТНЫЙ<br>(вариант, если нужно сэкономить)',
      'ЭКОНОМИЧНЫЙ<br>(вариант без утепления)'
    ],
    text: 'Улучшает адгезию клея к основанию'
  },
  {
    value: [
      'Грунт концентрат',
      'Baumit Multiprimer',
      'Baumit Multiprimer',
      'Baumit Multiprimer',
      'Baumit Multiprimer'
    ],
    text: 'Обеспечивает надежное крепление утеплителя к поверхности стены'
  },
  {
    value: [
      'Утеплитель',
      'Baumit StarContact',
      'Baumit ProContact',
      'Baumit NivoFix',
      ''
    ],
    text: 'Слой, который непосредственно обеспечивает утепление'
  }
]

const $table = document.querySelector('.sheet_table')

model.forEach(block => {
  const html = row(block)
  $table.insertAdjacentHTML('beforeend', html)
})

function row(block) {
  const html = block.value.map(item => `<div class="cell">${item}</div>`).join('')
  return `
    <div class="row">
      ${html}
    </div>
    <div class="tip">
      ${block.text}
    </div>
  `
}
