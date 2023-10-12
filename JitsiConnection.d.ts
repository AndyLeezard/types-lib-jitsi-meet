import JitsiConference from "./JitsiConference"
import { JitsiConnectionEvents } from "./JitsiConnectionEvents"

export default class JitsiConnection {
  constructor(appID?: string, token?: unknown, options?: unknown)
  /** connecting options (for example authentications parameters). */
  connect: (options?: {
    /** The username to use when connecting, if any. */
    id?: string
    /** The password to use when connecting with username, if any. */
    password?: string
    /** The name of the room/conference we will be connecting to. This is needed on connection time to be able to send conference-request over http. */
    name: string
  }) => void // TODO:
  attach: (options: {
    rid: string
    sid: string
    jid: string
    password: string
  }) => void // TODO:
  disconnect: (...args: unknown[]) => Promise<unknown> // TODO:
  getJid: () => string
  setToken: (token: unknown) => void
  initJitsiConference: (
    /** The name of the conference; if null - a generated name will be provided from the api */
    name: string,
    /** Object with properties / settings related to the conference */
    options: {
      avgRtpStatsN?: number
      enableIceRestart?: boolean
      p2p?: {
        enabled: boolean
        backToP2PDelay?: number
      }
      channelLastN?: number
      forceJVB121Ratio?: number
    }
  ) => JitsiConference
  addEventListener: (event: JitsiConnectionEvents, listener: unknown) => void // TODO:
  removeEventListener: (event: JitsiConnectionEvents, listener: unknown) => void // TODO:
  getConnectionTimes: () => number // TODO: check
  addFeature: (feature: string, submit?: boolean) => void
  removeFeature: (feature: string, submit?: boolean) => void
  getLogs: () =>
    | unknown
    | { metadata: { time: Date; url: string; ua: string; xmpp?: unknown } } // TODO:
}
