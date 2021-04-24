import { selector, useRecoilValue, DefaultValue, useRecoilState, selectorFamily } from 'recoil';
import { renderState } from 'recoil-state';
import { FlexComponent } from 'types';

export function useFlexComponentValue(id: string) {
  const flexComponentSelector = selector<FlexComponent>({
    key: 'flexComponentValueById',
    get: ({ get }) => {
      const state = get(renderState);
      return state.layout[id];
    },
  });
  const flexComponentState = useRecoilValue(flexComponentSelector);
  return flexComponentState;
}

export const baseComponentIdSelector = selector<string>({
  key: 'baseComponentId',
  get: ({ get }) => {
    const state = get(renderState);
    return state.baseComponentId;
  },
});

export const flexComponentStateSelector = selectorFamily<FlexComponent, string>({
  key: 'flexComponentStateById',
  get: (id) => ({ get }) => {
    const state = get(renderState);
    return state.layout[id];
  },
  set: (id) => ({ set, get }, newValue) => {
    const currentState = get(renderState);
    set(
      renderState,
      newValue instanceof DefaultValue
        ? newValue
        : { ...currentState, layout: { ...currentState.layout, [id]: newValue } }
    );
  },
});

// export function useFlexComponentState(id: string) {
//   const flexComponentState = useRecoilState(flexComponentStateSelector);
//   return flexComponentState;
// }
