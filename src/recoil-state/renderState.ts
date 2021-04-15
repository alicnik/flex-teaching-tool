import { atom, selector, useRecoilValue } from 'recoil';
import { FlexComponent } from 'types';

const defaultState: FlexComponent[] = [
  {
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
  {
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
  {
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
  {
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
];

export const renderState = atom({
  key: 'renderState',
  default: defaultState,
});

export function useFlexComponent(id: string) {
  const flexComponentSelector = selector({
    key: 'flexComponentById',
    get: ({ get }) => {
      const state = get(renderState);
      return state.find((component) => component.id === id);
    },
  });
  const flexComponent = useRecoilValue(flexComponentSelector);
  if (!flexComponent) {
    throw new Error('Could not find flex component with that id');
  }
  return flexComponent;
}
