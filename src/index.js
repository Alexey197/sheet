import {model} from './model'
import './styles/main.css'

const $table = document.querySelector('.sheet_table')

model.forEach((block) => {
  console.log(block.cell)
  console.log(block.text)
  $table.insertAdjacentHTML('beforeend', block.cell.toHTML())
  $table.insertAdjacentHTML('beforeend', block.text.toHTML())
})
