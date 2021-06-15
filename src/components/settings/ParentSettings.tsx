import { DropdownMenu } from 'components/settings/lib/DropdownMenu';
import { InputWithUnits } from 'components/settings/lib/InputWithUnits';
import React from 'react';
import { SetterOrUpdater } from 'recoil';
import { FlexComponent } from 'types';
import { AddRemoveChildren } from './ChildButtons';

interface ParentSettingsProps {
  id: string;
  component: FlexComponent;
  setComponent: SetterOrUpdater<FlexComponent>;
}

export function ParentSettings({ id, component, setComponent }: ParentSettingsProps) {
  function handleStyleChange(propertyName: keyof FlexComponent) {
    return function (e: React.ChangeEvent<{ value: unknown }>) {
      setComponent({
        ...component,
        [propertyName]: e.target.value as FlexComponent[keyof FlexComponent],
      });
    };
  }

  const { justifyContent, flexDirection, flexWrap, alignItems, gap } = component;
  const isRow = flexDirection.includes('row');
  return (
    <div>
      <DropdownMenu
        property="justifyContent"
        value={justifyContent}
        onChange={handleStyleChange}
        helperText={`How children are distributed along the ${
          isRow ? 'horizontal' : 'vertical'
        } axis`}
      />
      <DropdownMenu
        property="alignItems"
        value={alignItems}
        onChange={handleStyleChange}
        helperText={`How children are distributed across the ${
          isRow ? 'vertical' : 'horizontal'
        } axis`}
      />
      <DropdownMenu property="flexDirection" value={flexDirection} onChange={handleStyleChange} />
      <DropdownMenu property="flexWrap" value={flexWrap} onChange={handleStyleChange} />
      <InputWithUnits property="gap" value={gap} onChange={handleStyleChange} helperText="gap" />
      <AddRemoveChildren id={id!} />
    </div>
  );
}
