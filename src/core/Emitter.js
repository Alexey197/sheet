export class Emitter {
  constructor() {
    this.listeners = {}
  }
  
  emit(event, ...args) {
    if (!Array.isArray(this.listeners[event])) {
      return false
    }
    this.listeners[event].forEach(listener => {
      listener(...args)
    })
    return true
  }
  
  subscribe(event, fn) {
    this.listeners[event] = this.listeners[event] || []
    this.listeners[event].push(fn)
    return () => {
      this.listeners[event] =
        this.listeners[event].filter(listener => listener !==fn)
    }
  }
}

// const emitter = new Emitter()
//
// const unsubscribe = emitter.subscribe('Alex', data => console.log('Sub:', data))
// const unsubscribe2 = emitter.subscribe('12345', data => console.log('Sub:', data))
//
// emitter.emit('Alex', 45)
// unsubscribe2()
// emitter.emit('12345', 44)
// setTimeout(() => {
//   emitter.emit('Alex', '2 seconds later')
// }, 2000)
//
// setTimeout(() => {
//   unsubscribe()
// }, 3000)
//
// setTimeout(() => {
//   emitter.emit('Alex', '4 seconds later')
// }, 4000)