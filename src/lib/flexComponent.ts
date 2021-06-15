import { nanoid } from 'nanoid';
import { FlexComponent } from 'types';

export function createNewChild(parent: string): FlexComponent {
  return {
    id: nanoid(),
    parent,
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
  };
}
