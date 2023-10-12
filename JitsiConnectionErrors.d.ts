/**
 * `connection.droppedError` : Indicates that the connection was dropped with an error which was most likely
 * caused by some networking issues. The dropped term in this context means that
 * the connection was closed unexpectedly (not on user's request).
 *
 * One example is 'item-not-found' error thrown by Prosody when the BOSH session
 * times out after 60 seconds of inactivity. On the other hand 'item-not-found'
 * could also happen when BOSH request is sent to the server with the session-id
 * that is not know to the server. But this should not happen in lib-jitsi-meet
 * case as long as the service is configured correctly (there is no bug).
 *
 * `connection.serverError` : Indicates that the connection was dropped, because of too many 5xx HTTP
 * errors on BOSH requests.
 */
export type JitsiConnectionErrors =
  | "connection.droppedError"
  | "connection.otherError"
  | "connection.passwordRequired"
  | "connection.serverError"
