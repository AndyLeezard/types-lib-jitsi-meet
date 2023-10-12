import { MediaType } from "../RTC/MediaType"

export type AnalyticsEvents =
  | "operational"
  | "page"
  | "track"
  | "ui"
  | "restart"
  | "session-accept.timeout"
  | "session-initiate.received"
  | "session-initiate.timeout"
  | "terminate"
  | "transport-replace.received"
  | "transport-replace.success"
  | "decline"
  | "established"
  | "failed"
  | "switch.to.jvb"
  | "available.device"
  | "connection.disconnected"
  | "feedback"
  | "ice.duration"
  | "ice.establishment.duration.diff"
  | "ice.state.changed"
  | "track.no-bytes-sent"
  | "track.unmuted"

export function createRemotelyMutedEvent(mediaType: MediaType): {
  type: "operational"
  action: string
  mediaType: MediaType
}
