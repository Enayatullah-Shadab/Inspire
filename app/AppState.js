import Todo from "./Models/Todo.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {todo[]} */
  /** @type {image[]} */
  /** @type {quote[]} */
  /** @type {weather[]} */
  /** @type {clock[]} */
  todo = []
  image = []
  quote = []
  //   weather = []
  //   clock = []
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
