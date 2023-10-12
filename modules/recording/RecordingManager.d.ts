import ChatRoom from "../xmpp/ChatRoom"
import JibriSession from "./JibriSession"
import { RecordingConstants as Jibri } from "./Constants"

export default class RecordingManager {
  constructor(chatRoom: ChatRoom) // TODO: jsdocs says return type is void
  getSession: (sessionID: string) => JibriSession | undefined
  onPresence: (arg: { fromHiddenDomain: Node; presence: boolean }) => void
  startRecording: (options: {
    appData: string
    broadcastId?: string
    mode: Jibri["mode"]
    streamId?: string
  }) => Promise<unknown>
  stopRecording: (sessionID: string) => Promise<unknown>
}
