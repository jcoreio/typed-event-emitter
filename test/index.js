const { describe, it } = require('mocha')
var TypedEventEmitter = require('../src')
var expect = require('chai').expect

describe('typed-event-emitter', function () {
  it('exports EventEmitter subclass', function () {
    expect(new TypedEventEmitter()).to.be.an.instanceOf(require('events'))
  })
  it(`.emitted`, function () {
    const emitter = new TypedEventEmitter()
    return Promise.all([
      emitter.emitted('foo'),
      emitter.emit('foo', 'blah'),
    ]).then(([event]) => {
      expect(event).to.equal('blah')
    })
  })
})
