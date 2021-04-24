import { atom, selector } from 'recoil';
import { FlexComponent } from 'types';

interface DefaultRenderState {
  baseComponentId: string;
  layout: Record<string, FlexComponent>;
}

const defaultState: DefaultRenderState = {
  baseComponentId: 'base',
  layout: {
    base: {
      id: 'base',
      children: ['first-child', 'second-child', 'third-child'],
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      flexGrow: 0,
      flexShrink: 1,
      order: 0,
      flexBasis: 'auto',
      flexDirection: 'row',
      flexWrap: 'nowrap',
      width: 'auto',
      height: '100%',
      gap: '10px',
    },
    'first-child': {
      id: 'first-child',
      parent: 'base',
      children: [],
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      flexGrow: 0,
      flexShrink: 1,
      order: 0,
      flexBasis: 'auto',
      flexDirection: 'row',
      flexWrap: 'nowrap',
      width: 'min-content',
      height: 'min-content',
      gap: 'normal',
    },
    'second-child': {
      id: 'second-child',
      parent: 'base',
      children: [],
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      flexGrow: 0,
      flexShrink: 1,
      order: 0,
      flexBasis: 'auto',
      flexDirection: 'row',
      flexWrap: 'nowrap',
      width: 'min-content',
      height: 'min-content',
      gap: 'normal',
    },
    'third-child': {
      id: 'third-child',
      parent: 'base',
      children: [],
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      flexGrow: 0,
      flexShrink: 1,
      order: 0,
      flexBasis: 'auto',
      flexDirection: 'row',
      flexWrap: 'nowrap',
      width: 'min-content',
      height: 'min-content',
      gap: 'normal',
    },
  },
};

export const renderState = atom({
  key: 'renderState',
  default: defaultState,
});

export const layoutState = selector({
  key: 'renderLayoutState',
  get: ({ get }) => {
    const state = get(renderState);
    return state.layout;
  },
});
