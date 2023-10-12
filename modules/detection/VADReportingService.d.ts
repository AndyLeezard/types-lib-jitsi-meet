import { VADProcessor } from "./TrackVADEmitter";
import JitsiEventEmitter from '../util/EventEmitter';

export default class VADReportingService extends JitsiEventEmitter<unknown> { // TODO:
  constructor( intervalDelay: number );
  static create: ( micDeviceList: MediaDeviceInfo[], intervalDelay: number, createVADProcessor: () => VADProcessor ) => Promise<VADReportingService>;
  destroy: () => void;
}
