// @flow

const { describe, it } = require('mocha')
var EventEmitter = require('../src')
var expect = require('chai').expect

describe('typed-event-emitter', function () {
  it('exports EventEmitter', function () {
    expect(EventEmitter).to.equal(require('events'))
  })
})
