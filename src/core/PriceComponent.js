import {DomListeners} from './DomListeners'

export class PriceComponent extends DomListeners{
  constructor($root, options = {}) {
    super($root, options.listeners)
    this.name = options.name || ''
    this.emitter = options.emitter
    this.store = options.store
    this.unsubscribers = []
    this.storeSub = null
  }
  
  toHTML() {
    return ''
  }
  
  // Уведомляем слушателей про событие event
  $emit(event, ...args) {
    this.emitter.emit(event, ...args)
  }
  
  // Подписываемся на событие event
  $on(event, fn) {
    const unsub = this.emitter.subscribe(event, fn)
    this.unsubscribers.push(unsub)
  }
  
  $dispatch(action) {
    this.storeSub = this.store.dispatch(action)
  }
  
  $subscribe(fn) {
    this.store.subscribe(fn)
  }
  
  init() {
    this.initDOMListeners()
  }
  
  destroy() {
    this.removeDOMListeners()
    this.unsubscribers.forEach(unsub => unsub())
    this.storeSub.unsubscribe()
  }
}
