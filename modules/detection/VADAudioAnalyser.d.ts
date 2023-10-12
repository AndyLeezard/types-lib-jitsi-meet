import { VADProcessor } from "./TrackVADEmitter";
import JitsiConference from '../../JitsiConference';
import JitsiEventEmitter from '../util/EventEmitter';

export default class VADAudioAnalyser extends JitsiEventEmitter<unknown> { // TODO:
  constructor( conference: JitsiConference, createVADProcessor: () => VADProcessor );
  addVADDetectionService: ( vadService: unknown ) => void;
}
