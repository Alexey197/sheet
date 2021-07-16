import './styles/main.css'
import {Price} from './components/price/Price'
import {Table} from './components/table/Table'
import {Text} from './components/text/Text'
import {Input} from "./components/input/Input";
import {createStore} from "./core/createStore";
import {rootReducer} from "./core/redux/rootReducer";

const store = createStore(rootReducer, {
  inputState: {}
})

const price = new Price('#app', {
  components: [Table, Text, Input],
  store
})

price.render()
