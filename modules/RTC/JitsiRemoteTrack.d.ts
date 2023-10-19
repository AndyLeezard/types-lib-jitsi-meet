import JitsiTrack from "./JitsiTrack"
import JitsiTrackCommonMethods from "./JitsiTrackCommonMethods"
import RTC from "./RTC"

type JitsiRemoteTrackMethods = {
  isLocal: () => false
  getSSRC: () => number
  getTrackStreamingStatus: () => string
  setMute: (value: boolean) => void

  _setTrackStreamingStatus: (newStatus: string) => void
  _clearEnteredForwardedSourcesTimestamp: () => void
  _setEnteredForwardedSourcesTimestamp: (timestamp: number) => void
  _getEnteredForwardedSourcesTimestamp: () => number | null

  /** detected by inspection */
  setOwner: (e: unknown) => void
}

type JitsiRemoteTrack = JitsiTrack &
  JitsiTrackCommonMethods &
  JitsiRemoteTrackMethods & {
    /** Why is this always true regardless of the true mute state ? */
    hasBeenMuted: boolean
    isP2P: boolean
    /** Muted by owner */
    muted: boolean
    ownerEndpointId: string
    rtc: RTC
    ssrc: number
  }

export default JitsiRemoteTrack
