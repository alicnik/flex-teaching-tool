import { selector, useRecoilValue, DefaultValue, useRecoilState } from 'recoil';
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

export function useFlexComponentState(id: string) {
  const flexComponentStateSelector = selector<FlexComponent>({
    key: 'flexComponentStateById',
    get: ({ get }) => {
      const state = get(renderState);
      return state.layout[id];
    },
    set: ({ set, get }, newValue) => {
      const currentState = get(renderState);
      set(
        renderState,
        newValue instanceof DefaultValue
          ? newValue
          : { ...currentState, layout: { ...currentState.layout, [id]: newValue } }
      );
    },
  });
  const flexComponentState = useRecoilState(flexComponentStateSelector);
  return flexComponentState;
}
