# @jcoreio/typed-event-emitter

[![CircleCI](https://circleci.com/gh/jcoreio/typed-event-emitter.svg?style=svg)](https://circleci.com/gh/jcoreio/typed-event-emitter)
[![Coverage Status](https://codecov.io/gh/jcoreio/typed-event-emitter/branch/master/graph/badge.svg)](https://codecov.io/gh/jcoreio/typed-event-emitter)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![npm version](https://badge.fury.io/js/%40jcoreio%2Ftyped-event-emitter.svg)](https://badge.fury.io/js/%40jcoreio%2Ftyped-event-emitter)

fully type-safe `EventEmitter` flow declaration

## Usage

```sh
npm install --save @jcoreio/typed-event-emitter
```

```js
// @flow

import EventEmitter from '@jcoreio/typed-event-emitter'

function createEmitter(): EventEmitter<{
  eventA: [string],
  eventB: [string, number],
}>

const emitter = createEmitter()

emitter.on('eventA', (foo: string) => {...})
emitter.on('eventB', (foo: string, bar: number) => {...})

emitter.emit('eventA', 'foo')
emitter.emit('eventB', 'foo', 1)
```
