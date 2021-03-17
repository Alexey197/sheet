export class Site {
  constructor(selector) {
    this.$el = document.querySelector(selector)
  }
  
  render(model, place = 'beforeend') {
    model.forEach(block => {
      for (let key in block) {
        if (Object.prototype.hasOwnProperty.call(block, key)) {
          this.$el.insertAdjacentHTML(place, block[key].toHTML())
        }
      }
    })
  }
}
