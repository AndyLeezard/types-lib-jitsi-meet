import JitsiConference from '../../JitsiConference';
import JitsiEventEmitter from '../util/EventEmitter';
import { ConnectionQualityEvents } from '../../service/connectivity/ConnectionQualityEvents';

export default class ConnectionQuality {
  constructor( conference: JitsiConference, eventEmitter: JitsiEventEmitter<ConnectionQualityEvents>, options: { config: { startBitrate: number; } } );
  getTarget: ( simulcast: boolean, resolution: /* Resolution */any, millisSinceStart: number, videoQualitySettings: unknown ) => number; // TODO:
  getStats: () => unknown; // TODO:
}
