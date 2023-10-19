/** Used both in local and remote track */
type JitsiTrackCommonMethods = {
  getParticipantId: () => string
  getSourceName: () => string
  isMuted: () => boolean
  toString: () => string
}
export default JitsiTrackCommonMethods
