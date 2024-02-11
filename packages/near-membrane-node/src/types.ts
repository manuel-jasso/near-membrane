import type { Instrumentation } from 'o11y/dist/modules/o11y/client/interfaces';
import type {
    DistortionCallback,
    LiveTargetCallback,
    SignSourceCallback,
} from '@locker/near-membrane-base';

export interface NodeEnvironmentOptions {
    distortionCallback?: DistortionCallback;
    endowments?: PropertyDescriptorMap;
    globalObjectShape?: object;
    instrumentation?: Instrumentation;
    liveTargetCallback?: LiveTargetCallback;
    remapTypedArrays?: boolean;
    signSourceCallback?: SignSourceCallback;
}
