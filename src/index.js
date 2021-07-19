import './styles/main.css'
import {Price} from './components/price/Price'
import {Table} from './components/table/Table'
import {Text} from './components/text/Text'
import {Input} from "./components/input/Input";
import {createStore} from "./core/createStore";
import {rootReducer} from "./core/redux/rootReducer";
import {storage} from "./core/utils";
import {Button} from "./components/button/button";

const store = createStore(rootReducer, storage('price-state'))

store.subscribe(state => {
  console.log('App State: ', state)
  storage('price-state', state)
})

const price = new Price('#app', {
  components: [Table, Text, Input, Button],
  store
})

price.render()
