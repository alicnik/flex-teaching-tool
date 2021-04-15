import { useFlexComponentValue } from 'recoil-state';

interface FlexComponentRendererState {
  id: string;
}

export function FlexComponentRenderer({ id }: FlexComponentRendererState) {
  const flexComponent = useFlexComponentValue(id);

  if (!flexComponent) {
    return null;
  }

  const { id: componentId, children, ...flexStyles } = flexComponent;

  return (
    <div
      style={{
        display: 'flex',
        border: '2px solid black',
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
