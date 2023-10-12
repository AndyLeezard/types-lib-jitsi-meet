import { VADScore } from "./VADNoiseDetection";
import JitsiEventEmitter from '../util/EventEmitter';

export default class VADTalkMutedDetection extends JitsiEventEmitter<unknown> { // TODO:
  constructor();
  changeMuteState: ( isMuted: boolean ) => void;
  isActive: () => boolean;
  processVADScore: ( vadScore: VADScore ) => void;
  reset: () => void;
}
