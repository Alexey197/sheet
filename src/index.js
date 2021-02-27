import {model} from './model'
import {row} from './templates'
import './styles/main.css'

const $table = document.querySelector('.sheet_table')

model.forEach((block, i) => {
  console.log(i)
  const html = row(block)
  $table.insertAdjacentHTML('beforeend', html)
})
