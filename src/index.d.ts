export interface EventEmitterInterface<Events extends Record<string, any[]>> {
  addListener<Event extends keyof Events>(
    event: Event,
    listener: (...args: Events[Event]) => any
  ): this
  emit: <Event extends keyof Events>(
    event: Event,
    ...args: Events[Event]
  ) => boolean
  eventNames(): Array<keyof Events>
  listeners<Event extends keyof Events>(
    event: Event
  ): Array<(...args: Events[Event]) => any>
  listenerCount(event: keyof Events): number
  on<Event extends keyof Events>(
    event: Event,
    listener: (...args: Events[Event]) => any
  ): this
  once<Event extends keyof Events>(
    event: Event,
    listener: (...args: Events[Event]) => any
  ): this
  prependListener<Event extends keyof Events>(
    event: Event,
    listener: (...args: Events[Event]) => any
  ): this
  prependOnceListener<Event extends keyof Events>(
    event: Event,
    listener: (...args: Events[Event]) => any
  ): this
  removeAllListeners(event?: keyof Events): this
  removeListener<Event extends keyof Events>(
    event: Event,
    listener: (...args: Events[Event]) => any
  ): this
  setMaxListeners(n: number): this
  getMaxListeners(): number
}

export default class EventEmitter<Events extends Record<string, any[]>>
  implements EventEmitterInterface<Events>
{
  addListener<Event extends keyof Events>(
    event: Event,
    listener: (...args: Events[Event]) => any
  ): this
  emit: <Event extends keyof Events>(
    event: Event,
    ...args: Events[Event]
  ) => boolean
  eventNames(): Array<keyof Events>
  listeners<Event extends keyof Events>(
    event: Event
  ): Array<(...args: Events[Event]) => any>
  listenerCount(event: keyof Events): number
  on<Event extends keyof Events>(
    event: Event,
    listener: (...args: Events[Event]) => any
  ): this
  once<Event extends keyof Events>(
    event: Event,
    listener: (...args: Events[Event]) => any
  ): this
  prependListener<Event extends keyof Events>(
    event: Event,
    listener: (...args: Events[Event]) => any
  ): this
  prependOnceListener<Event extends keyof Events>(
    event: Event,
    listener: (...args: Events[Event]) => any
  ): this
  removeAllListeners(event?: keyof Events): this
  removeListener<Event extends keyof Events>(
    event: Event,
    listener: (...args: Events[Event]) => any
  ): this
  setMaxListeners(n: number): this
  getMaxListeners(): number
}
