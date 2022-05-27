import { createPrimitiveAtom } from '@reatom/core/primitives';

export const playerAtom = createPrimitiveAtom<string | undefined>(undefined);
