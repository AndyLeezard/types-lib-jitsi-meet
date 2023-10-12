import Listenable from "../util/Listenable"

export class NetworkInfo extends Listenable {
  updateNetworkInfo: (arg: { isOnline: boolean }) => void
  isOnline: () => boolean
}
