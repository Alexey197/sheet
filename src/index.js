import {model} from './model'
import {Site} from './classes/site'
import './styles/main.css'

const table = new Site('.sheet_table')

table.render(model)
