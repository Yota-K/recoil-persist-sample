import { atom } from 'recoil';
import { recoilPersist} from 'recoil-persist';

export type Todo = {
  id: number;
  text: string;
};

const { persistAtom } = recoilPersist();

export const todoState = atom<Todo[]>({
  key: 'todoState', // unique ID (with respect to other atoms/selectors)
  default: [], // default value (aka initial value)
  effects_UNSTABLE: [persistAtom], // This passage is need because global state persistent.
});
