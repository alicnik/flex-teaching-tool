import { atom, selector, useRecoilState, useRecoilValue } from 'recoil';
import { PointerState } from 'types/pointer';

const defaultPointerState: PointerState = {
  currentlySelectedId: 'base',
  currentlyHoveredId: '',
};

export const pointerState = atom({
  key: 'pointerState',
  default: defaultPointerState,
});

export function usePointerState() {
  const state = useRecoilState(pointerState);
  return state;
}

export const currentlySelectedSelector = selector({
  key: 'currentlySelectedSelector',
  get: ({ get }) => get(pointerState).currentlySelectedId,
});

export function useCurrentlySelected() {
  return useRecoilValue(currentlySelectedSelector);
}
