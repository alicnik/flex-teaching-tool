import { atom, useRecoilState } from 'recoil';
import { PointerState } from 'types/pointer';

const defaultPointerState: PointerState = {
  currentlySelectedId: 'base',
  currentlyHoveredId: null,
};

const pointerState = atom({
  key: 'pointerState',
  default: defaultPointerState,
});

export function usePointerState() {
  const state = useRecoilState(pointerState);
  return state;
}
