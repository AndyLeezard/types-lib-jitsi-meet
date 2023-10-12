import JitsiEventEmitter from "../util/EventEmitter";

export type VADScore = {
    timestamp: Date;
    score: number;
    pcmData: number[];
    deviceId: string;
};

declare class VADNoiseDetection extends JitsiEventEmitter<unknown> {
    // TODO:
    constructor();
    changeMuteState: (isMuted: boolean) => void;
    isActive: () => boolean;
    reset: () => void;
    processVADScore: (vadScore: VADScore) => void;
}

export { VADNoiseDetection };
