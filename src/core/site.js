// export class Site {
//   constructor(selector) {
//     this.$el = document.querySelector(selector)
//   }
//
//   render(model, name, place = 'beforeend') {
//     model.forEach(block => {
//       for (let key in block) {
//         if (Object.prototype.hasOwnProperty.call(block, key) || key === name) {
//           this.$el.insertAdjacentHTML(place, block[key].toHTML())
//           console.log(block[key].toHTML())
//         }
//       }
//     })
//   }
// }
