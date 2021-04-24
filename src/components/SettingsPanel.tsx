import * as React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { flexComponentStateSelector } from 'recoil-state';
import { currentlySelectedSelector } from 'recoil-state/pointerState';
import { JustifyContent } from 'types';

export function SettingsPanel() {
  // const currentlySelected = useCurrentlySelected();
  // const [flexComponent, setFlexComponent] = useFlexComponentState(currentlySelected!);
  const id = useRecoilValue(currentlySelectedSelector);
  const [component, setComponent] = useRecoilState(flexComponentStateSelector(id!));

  function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    setComponent({ ...component, [e.target.name]: e.target.value as JustifyContent });
  }

  return (
    <div>
      <label>
        <code>justify-content</code>
        <select name="justifyContent" value={component.justifyContent} onChange={handleChange}>
          <option value="flex-start">flex-start</option>
          <option value="flex-end">flex-end</option>
          <option value="center">center</option>
          <option value="space-between">space-between</option>
          <option value="space-around">space-around</option>
          <option value="space-evenly">space-evenly</option>
        </select>
      </label>
      <br />
      <label>
        <code>align-items</code>
        <select name="alignItems" value={component.alignItems} onChange={handleChange}>
          <option value="flex-start">flex-start</option>
          <option value="flex-end">flex-end</option>
          <option value="center">center</option>
        </select>
      </label>
    </div>
  );
}
