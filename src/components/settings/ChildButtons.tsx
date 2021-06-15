import { useRecoilState, useSetRecoilState } from 'recoil';
import { Button } from '@material-ui/core';
import { flexComponentStateSelector, renderState } from 'recoil-state';

import { createNewChild } from 'lib/flexComponent';

interface AddRemoveChildrenProps {
  id: string;
}

export function AddRemoveChildren({ id }: AddRemoveChildrenProps) {
  const [component, setComponent] = useRecoilState(flexComponentStateSelector(id));
  const setRenderState = useSetRecoilState(renderState);

  function handleAdd() {
    const newChild = createNewChild(id!);
    setRenderState((existingState) => ({
      ...existingState,
      layout: { ...existingState.layout, [newChild.id]: newChild },
    }));
    setComponent({ ...component, children: [...component.children, newChild.id] });
  }

  function handleRemove() {
    const childToRemove = component.children[component.children.length - 1];
    setRenderState((existingState) => {
      const layout = { ...existingState.layout };
      delete layout[childToRemove];
      return { ...existingState, layout };
    });
    setComponent({
      ...component,
      children: component.children.filter((child) => child !== childToRemove),
    });
  }

  function handleReset() {
    const newChildren = Array(3)
      .fill(null)
      .map(createNewChild)
      .map((child) => ({ ...child, parent: id }));
    setRenderState((existingState) => {
      const layout = { ...existingState.layout };
      for (const componentId in layout) {
        if (component.children.includes(componentId)) {
          delete layout[componentId];
        }
      }
      for (const child of newChildren) {
        layout[child.id] = child;
      }
      return { ...existingState, layout };
    });
    setComponent({ ...component, children: newChildren.map((child) => child.id) });
  }

  return (
    <>
      <Button onClick={handleAdd}>Add child</Button>
      <Button onClick={handleRemove}>Remove child</Button>
      <Button onClick={handleReset} disabled={component.children.length === 3}>
        Reset children
      </Button>
    </>
  );
}
