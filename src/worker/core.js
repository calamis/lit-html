import { auth } from '../utils/firebase/auth/worker';
import { fetch } from '../utils/fetch/worker';

export const core = {
  auth,
  fetch
};
