import * as React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { flexComponentStateSelector } from 'recoil-state';
import { currentlySelectedSelector } from 'recoil-state/pointerState';
import { FlexComponent } from 'types';
import { Dropdown } from './Dropdown';

export function SettingsPanel() {
  const id = useRecoilValue(currentlySelectedSelector);
  const [component, setComponent] = useRecoilState(flexComponentStateSelector(id!));

  function handleChange(propertyName: keyof FlexComponent) {
    return function (e: React.ChangeEvent<{ value: unknown }>) {
      setComponent({
        ...component,
        [propertyName]: e.target.value as FlexComponent[keyof FlexComponent],
      });
    };
  }

  const { justifyContent, flexDirection, flexWrap, alignItems, gap } = component;

  return (
    <div>
      <Dropdown
        property="justifyContent"
        value={justifyContent}
        onChange={handleChange}
        helperText={`How children are distributed along the ${
          flexDirection.includes('row') ? 'horizontal' : 'vertical'
        } axis`}
      />
      <Dropdown
        property="alignItems"
        value={alignItems}
        onChange={handleChange}
        helperText={`How children are distributed across the ${
          flexDirection.includes('row') ? 'vertical' : 'horizontal'
        } axis`}
      />
      <Dropdown
        property="flexDirection"
        value={flexDirection}
        onChange={handleChange}
        helperText="Direction"
      />
      <Dropdown property="flexWrap" value={flexWrap} onChange={handleChange} helperText="Wrap" />
    </div>
  );
}
