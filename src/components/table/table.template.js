import {rowsArr} from '../../model'

function createCell(content) {
  return `
    <div class="cell">${content}</div>
  `
}

function createRow(content) {
  return `
    <div class="row">${content}</div>
  `
}

export function createTable() {
  // const colsCount = rowsArr[0].length
  // const rowsCount = rowsArr.length
  const rows = []
  rowsArr.map(el => {
    const row = []
    el.map(el => {
      const cell = createCell(el)
      row.push(cell)
    })
    rows.push(createRow(row.join('')))
  })
  //
  // for (let i = 0; i < rowsCount; i++) {
  //   const row = []
  //   for (let j = 0; j < rowsArr[i].length; j ++) {
  //     const cell = (createCell(rowsArr[i][j]))
  //     row.push(cell)
  //   }
  //   rows.push(createRow(row.join('')))
  // }
  
  return rows.join('')
}
