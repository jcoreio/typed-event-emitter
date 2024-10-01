var EventEmitter = require('events')
var emitted = require('p-event')

function TypedEventEmitter() {
  EventEmitter.apply(this, arguments)
}
TypedEventEmitter.prototype = Object.create(EventEmitter.prototype, {
  emitted: {
    // eslint-disable-next-line object-shorthand
    value: function () {
      var args = [this]
      for (var i = 0; i < arguments.length; i++) {
        args.push(arguments[i])
      }
      return emitted.apply(undefined, args)
    },
  },
})

module.exports = TypedEventEmitter
