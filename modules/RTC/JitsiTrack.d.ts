import EventEmitter from "events"
import JitsiConference from "../../JitsiConference"
import { MediaType } from "../../service/RTC/MediaType"
import { VideoType } from "../../service/RTC/VideoType"
import TraceablePeerConnection from "./TraceablePeerConnection"

type JitsiTrack = EventEmitter &
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
