// import {model} from './model'
// import {Site} from './core/site'
import './styles/main.css'
import {Price} from './components/price/Price'
import {Table} from './components/table/Table'
import {Text} from './components/text/Text'
import {Input} from "./components/input/Input";

// const table = new Site('.sheet_table')

// table.render(model, 'cell')

const price = new Price('#app', {
  components: [Table, Text, Input]
})

price.render()
