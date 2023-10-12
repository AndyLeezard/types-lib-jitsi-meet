declare type RecordingConstants = {
  error: "busy" | "error" | "resource-constraint" | "service-unavailable"

  mode: "file" | "stream"

  status: "off" | "on" | "pending"
}

export type { RecordingConstants }
