export type DetectionEvents =
  | "detector_state_change"
  | "audio_input_state_changed"
  | "no_audio_input_detected"
  | "detection.vad_noise_device"
  | "vad-report-published"
  | "detection.vad_score_published"
  | "detection.vad_talk_while_muted"
