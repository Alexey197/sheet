import {rowsArr} from '../../model'

function createCell(index, content) {
  return `
    <div class="cell cell-${index}" data-order="${index}">${content}</div>
  `
}

function createRow(content) {
  return `
    <div class="row" data-type="row">${content}</div>
  `
}

export function createTable() {
  const rowsCount = rowsArr.length
  const rows = []

  for (let i = 0; i < rowsCount; i++) {
    const row = []
    for (let j = 0; j < rowsArr[i].length; j++) {
      const cell = (createCell(i, rowsArr[i][j]))
      row.push(cell)
    }
    rows.push(createRow(row.join('')))
  }
  
  return rows.join('')
}
