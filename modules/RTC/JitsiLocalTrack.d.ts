import JitsiTrack from "./JitsiTrack"
import JitsiTrackCommonMethods from "./JitsiTrackCommonMethods"
import { CameraFacingMode } from "../../service/RTC/CameraFacingMode"

type JitsiLocalTrackMethods = {
  getCameraFacingMode: () => CameraFacingMode | undefined
  getDeviceId: () => string
  isEnded: () => boolean
  isLocal: () => true
  isReceivingData: () => boolean
  mute: () => Promise<void>
  setEffect: (effect: unknown) => Promise<unknown> // TODO:
  stopStream: () => void
  unmute: () => Promise<void>

  /** detected by inspection */
  getDuration: () => unknown
  _switchCamera: () => void
}

type JitsiLocalTrack = JitsiTrack &
  JitsiTrackCommonMethods &
  JitsiLocalTrackMethods & {
    maxEnabledResolution?: number
    metadata: {
      timestamp: number
    }
    resolution: number
    rtcId: number
    /** after inspection it has been always undefined */
    sourceId: unknown
    sourceType: null
    storedMSID: string
    videoType: null | undefined | "camera"
  }

export default JitsiLocalTrack
