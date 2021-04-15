import { useFlexComponentValue } from 'recoil-state';
import { usePointerState } from 'recoil-state/pointerState';

interface FlexComponentRendererState {
  id: string;
}

export function FlexComponentRenderer({ id }: FlexComponentRendererState) {
  const flexComponent = useFlexComponentValue(id);
  const [pointerState, setPointerState] = usePointerState();
  const isSelected = pointerState.currentlySelectedId === id;
  const isHovered = pointerState.currentlyHoveredId === id;

  if (!flexComponent) {
    return null;
  }

  const { id: componentId, children, ...flexStyles } = flexComponent;
  function updatePointerState(e: React.MouseEvent, key: string) {
    e.stopPropagation();
    setPointerState({ ...pointerState, [key]: id });
  }

  return (
    <div
      onClick={(e) => updatePointerState(e, 'currentlySelectedId')}
      onMouseOver={(e) => updatePointerState(e, 'currentlyHoveredId')}
      onMouseLeave={(e) => updatePointerState(e, 'currentlyHoveredId')}
      style={{
        display: 'flex',
        border: `2px solid ${isSelected ? 'lightgreen' : isHovered ? 'teal' : 'black'}`,
        padding: 30,
        ...flexStyles,
      }}
    >
      {children.map((childId) => (
        <FlexComponentRenderer key={childId} id={childId} />
      ))}
    </div>
  );
}
