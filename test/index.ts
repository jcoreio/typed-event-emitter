/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
// @flow

import EventEmitter from '../src/index'

declare function createEmitter(): EventEmitter<{
  foo: [string]
  bar: [string, number]
  empty: []
}>

const emitter = createEmitter()

emitter.on('empty', () => {})
// @ts-expect-error wrong arg count
emitter.on('empty', (a: any) => {})
emitter.on('foo', (a: string) => {})
// @ts-expect-error wrong arg type
emitter.on('foo', (a: number) => {})
emitter.on('bar', (a: string, b: number) => {})
// @ts-expect-error wrong arg type
emitter.on('bar', (a: number, b: number) => {})
// @ts-expect-error invalid event name
emitter.on('baz', (a: number) => {})

emitter.once('empty', () => {})
// @ts-expect-error wrong arg count
emitter.once('empty', (a: any) => {})
emitter.once('foo', (a: string) => {})
// @ts-expect-error wrong arg type
emitter.once('foo', (a: number) => {})
emitter.once('bar', (a: string, b: number) => {})
// @ts-expect-error wrong arg type
emitter.once('bar', (a: number, b: number) => {})
// @ts-expect-error invalid event name
emitter.once('baz', (a: number) => {})

emitter.addListener('empty', () => {})
// @ts-expect-error wrong arg count
emitter.addListener('empty', (a: any) => {})
emitter.addListener('foo', (a: string) => {})
// @ts-expect-error wrong arg type
emitter.addListener('foo', (a: number) => {})
emitter.addListener('bar', (a: string, b: number) => {})
// @ts-expect-error wrong arg type
emitter.addListener('bar', (a: number, b: number) => {})
// @ts-expect-error invalid event name
emitter.addListener('baz', (a: number) => {})

emitter.prependListener('empty', () => {})
// @ts-expect-error wrong arg count
emitter.prependListener('empty', (a: any) => {})
emitter.prependListener('foo', (a: string) => {})
// @ts-expect-error wrong arg type
emitter.prependListener('foo', (a: number) => {})
emitter.prependListener('bar', (a: string, b: number) => {})
// @ts-expect-error wrong arg type
emitter.prependListener('bar', (a: number, b: number) => {})
// @ts-expect-error invalid event name
emitter.prependListener('baz', (a: number) => {})

emitter.prependOnceListener('empty', () => {})
// @ts-expect-error wrong arg count
emitter.prependOnceListener('empty', (a: any) => {})
emitter.prependOnceListener('foo', (a: string) => {})
// @ts-expect-error wrong arg type
emitter.prependOnceListener('foo', (a: number) => {})
emitter.prependOnceListener('bar', (a: string, b: number) => {})
// @ts-expect-error wrong arg type
emitter.prependOnceListener('bar', (a: number, b: number) => {})
// @ts-expect-error invalid event name
emitter.prependOnceListener('baz', (a: number) => {})

emitter.emit('bar', 'a', 2)
// @ts-expect-error wrong arg count
emitter.emit('bar', 'a')
// @ts-expect-error wrong arg type
emitter.emit('bar', 'a', 'b')
// @ts-expect-error invalid event name
emitter.emit('baz', 'qux')
