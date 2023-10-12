declare class AnalyticsAdapter {
  reset: () => void
  dispose: () => void
  setAnalyticsHandlers: (handlers: Array<unknown>) => void // TODO:
  addPermanentProperties: (properties: unknown) => void // TODO:
  setConferenceName: (name: string) => void
  sendEvent: (eventName: string | unknown, properties?: unknown) => void // TODO:
}

export type { AnalyticsAdapter as default }
