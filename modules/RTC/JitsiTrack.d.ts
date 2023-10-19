import JitsiConference from "../../JitsiConference"
import { MediaType } from "../../service/RTC/MediaType"
import { VideoType } from "../../service/RTC/VideoType"
import TraceablePeerConnection from "./TraceablePeerConnection"

type TNodeEventEmitter = {
  /** Returns EventEmitter type */
  addListener: (
    eventName: string | symbol,
    listener: (...args: any[]) => void
  ) => unknown
  emit: (eventName: string | symbol, ...args: any[]) => boolean
  eventNames: () => (string | symbol)[]
  getMaxListeners: () => number
  listenerCount: (
    eventName: string | symbol,
    listener?: Function | undefined
  ) => number
  listeners: (eventName: string | symbol) => Function[]
  /** Returns EventEmitter type */
  off: (
    eventName: string | symbol,
    listener: (...args: any[]) => void
  ) => unknown
  /** Returns EventEmitter type */
  on: (
    eventName: string | symbol,
    listener: (...args: any[]) => void
  ) => unknown
  /** Returns EventEmitter type */
  once: (
    eventName: string | symbol,
    listener: (...args: any[]) => void
  ) => unknown
  /** Returns EventEmitter type */
  prependListener: (
    eventName: string | symbol,
    listener: (...args: any[]) => void
  ) => unknown
  /** Returns EventEmitter type */
  prependOnceListener: (
    eventName: string | symbol,
    listener: (...args: any[]) => void
  ) => unknown
  rawListeners: (eventName: string | symbol) => Function[]
  /** Returns EventEmitter type */
  removeAllListeners: (event?: string | symbol | undefined) => unknown
  /** Returns EventEmitter type */
  removeListener: (
    eventName: string | symbol,
    listener: (...args: any[]) => void
  ) => unknown
  /** Returns EventEmitter type */
  setMaxListeners: (n: number) => unknown
}

type JitsiTrack = TNodeEventEmitter &
  JitsiTrackBaseMethods & {
    conference: JitsiConference
    containers: Array<HTMLElement>
    deviceId: string
    disposed: boolean
    handlers: Map<"track_mute" | "track_unmute" | "track_ended", () => void>
    stream: MediaStream
    track: MediaStreamTrack
    type: MediaType
  }

type JitsiTrackBaseMethods = {
  attach: (container: HTMLElement) => void
  detach: (container: HTMLElement) => void

  dispose: () => Promise<void>
  getId: () => string | null
  getMSID: () => string | null
  getOriginalStream: () => MediaStream
  getSourceName: () => string
  getStreamId: () => string | null
  getTrack: () => MediaStreamTrack
  getTrackId: () => string | null
  getTrackLabel: () => string
  getType: () => MediaType
  getUsageLabel: () => string
  getVideoType: () => VideoType

  isActive: () => boolean
  isAudioTrack: () => boolean
  isLocal: () => boolean
  isLocalAudioTrack: () => boolean
  isVideoTrack: () => boolean
  isWebRTCTrackMuted: () => boolean

  setAudioLevel: (audioLevel: number, tpc: TraceablePeerConnection) => void
  setAudioOutput: (audioOutputDeviceId: "" | string) => Promise<unknown> // TODO: what will this promise contain?

  /** detected by inspection */
  getHeight: () => number
  getWidth: () => number
  setSourceName: (name: string) => void
}

export default JitsiTrack
