import JitsiConnection from "./JitsiConnection"
import JitsiMediaDevices from "./JitsiMediaDevices"
import { JitsiConferenceErrors } from "./JitsiConferenceErrors"
import { JitsiConnectionErrors } from "./JitsiConnectionErrors"
import { JitsiTrackErrors } from "./JitsiTrackErrors"
import { JitsiLogLevels } from "./JitsiLogLevels"
import { JitsiMediaDevicesEvents } from "./JitsiMediaDevicesEvents"
import { JitsiTrackEvents } from "./JitsiTrackEvents"
import { JitsiConnectionEvents } from "./JitsiConnectionEvents"
import { JitsiConferenceEvents } from "./JitsiConferenceEvents"
import { JitsiTranscriptionStatus } from "./JitsiTranscriptionStatus"
import BrowserCapabilities from "./modules/browser/BrowserCapabilities"
import { DetectionEvents } from "./modules/detection/DetectionEvents"
import TrackVADEmitter, {
  VADProcessor,
} from "./modules/detection/TrackVADEmitter"
import { RecordingConstants } from "./modules/recording"
import JitsiLocalTrack from "./modules/RTC/JitsiLocalTrack"
import PrecallTest from "./modules/statistics/PrecallTest"
import { getTokenAuthUrl } from "./modules/util/AuthUtil"
import { loadScript } from "./modules/util/ScriptUtil"
import { VideoSIPGWConstants } from "./modules/videosipgw/VideoSIPGWConstants"
import AudioMixer from "./modules/webaudio/AudioMixer"
import { ConnectionQualityEvents } from "./service/connectivity/ConnectionQualityEvents"
import { E2ePingEvents } from "./service/e2eping/E2ePingEvents"

export type CreateLocalTracksOptions = {
  effects?: Array<unknown> // TODO: work out what unknown is
  devices?: Array<string>
  resolution?: string
  cameraDeviceId?: string
  micDeviceId?: string
  interval?: number
  checkAgain?: () => boolean
  listener?: () => void
  frameRate?: {
    min?: string
    max?: string
  }
  desktopSharingFrameRate?: {
    min?: string
    max?: string
  }
  constraints?: any // TODO: figure out this type
}

/** InitOptions */
export type IJitsiMeetJSOptions = {
  enableAnalyticsLogging?: boolean
  enableWindowOnErrorHandler?: boolean
  externalStorage?: Storage
  flags?: {
    runInLiteMode?: boolean
    ssrcRewritingEnabled?: boolean
  }

  /** RTCStats */
  analytics?: {
    obfuscateRoomName?: boolean
    rtcstatsEnabled?: boolean
    rtcstatsEndpoint?: string
    rtcstatsPollInterval?: number
    rtcstatsSendSdp?: boolean
    rtcstatsStoreLogs?: boolean
    rtcstatsUseLegacy?: boolean
  }
}

export type JitsiMeetJSType = {
  version: string

  JitsiConnection: typeof JitsiConnection

  ProxyConnectionService: unknown // TODO:

  //USER_MEDIA_SLOW_PROMISE_TIMEOUT: 1000;

  constants: {
    recording: RecordingConstants
    sipVideoGW: VideoSIPGWConstants
    transcriptionStatus: JitsiTranscriptionStatus
  }

  events: {
    conference: JitsiConferenceEvents
    connection: JitsiConnectionEvents
    detection: DetectionEvents
    track: JitsiTrackEvents
    mediaDevices: JitsiMediaDevicesEvents
    connectionQuality: ConnectionQualityEvents
    e2eping: E2ePingEvents
  }

  errors: {
    conference: JitsiConferenceErrors
    connection: JitsiConnectionErrors
    track: JitsiTrackErrors
  }

  errorTypes: {
    JitsiTrackError: unknown // TODO:
  }

  logLevels: JitsiLogLevels // code refers to Logger.levels and that is in @jitsi/logger

  mediaDevices: JitsiMediaDevices

  analytics: unknown // TODO: code referes to Statistics.analytics which comes from modules/statstics/AnalyticsAdapter.js

  init: (options?: IJitsiMeetJSOptions) => void

  isDesktopSharingEnabled: () => boolean

  isWebRtcSupported: () => boolean

  setLogLevel: (level: JitsiLogLevels) => void

  setLogLevelById: (level: JitsiLogLevels, id: unknown) => void // TODO:

  addGlobalLogTransport: (globalTransport: unknown) => void // TODO:

  removeGlobalLogTransport: (globalTransport: unknown) => void // TODO:

  setGlobalLogOptions: (options: unknown) => void // TODO:

  createLocalTracks: (
    options: CreateLocalTracksOptions,
    firePermissionPromptIsShownEvent?: boolean,
    originalOptions?: CreateLocalTracksOptions
  ) => Promise<Array<JitsiLocalTrack> | JitsiConferenceErrors> // TODO:

  createTrackVADEmitter: (
    localAudioDeviceId: string,
    sampleRate: 256 | 512 | 1024 | 4096 | 8192 | 16384,
    vadProcessor: VADProcessor
  ) => Promise<TrackVADEmitter>

  createAudioMixer: () => AudioMixer

  getActiveAudioDevice: () => Promise</* Object */ any> // TODO: can we improve on object?

  // isDeviceListAvailable: () => boolean; // obsosete

  // isDeviceChangeAvailable: ( deviceType: string ) => boolean; // obsosete

  isMultipleAudioInputSupported: () => boolean

  isCollectingLocalStats: () => boolean

  enumerateDevices: (
    callback: (availableDevices: MediaDeviceInfo[]) => void
  ) => void

  getGlobalOnErrorHandler: (
    message: string,
    source: string,
    lineno?: number,
    colno?: number,
    error?: Error
  ) => void

  setNetworkInfo: (arg: { isOnline: boolean }) => void

  setVideoTrackContentHints: (track: MediaStreamTrack, hint: string) => void

  precallTest: PrecallTest

  util: {
    AuthUtil: { getTokenAuthUrl: typeof getTokenAuthUrl }
    ScriptUtil: { loadScript: typeof loadScript }
    browser: BrowserCapabilities
  }
}
