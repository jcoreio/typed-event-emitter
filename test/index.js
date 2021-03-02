// @flow

const { describe, it } = require('mocha')
var EventEmitter = require('..')
var expect = require('chai').expect

describe('typed-event-emitter', function() {
  it('exports EventEmitter', function() {
    expect(EventEmitter).to.equal(require('events'))
  })
})
