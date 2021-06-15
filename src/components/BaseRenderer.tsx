import { useRecoilValue } from 'recoil';
import { baseComponentIdSelector } from 'recoil-state';
import { FlexComponentRenderer } from './ComponentRenderer';

export function Renderer() {
  const baseComponentId = useRecoilValue(baseComponentIdSelector);
  return (
    <div id="renderer">
      <FlexComponentRenderer id={baseComponentId} />
    </div>
  );
}
