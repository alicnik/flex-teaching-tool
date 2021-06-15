import * as React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { flexComponentStateSelector } from 'recoil-state';
import { currentlySelectedSelector } from 'recoil-state/pointerState';
import { ParentSettings } from './ParentSettings';
import { ChildSettings } from './AddRemoveChildren';

export function SettingsPanel() {
  const id = useRecoilValue(currentlySelectedSelector);
  const [component, setComponent] = useRecoilState(flexComponentStateSelector(id!));

  return component.parent ? (
    <ChildSettings />
  ) : (
    <ParentSettings id={id!} component={component} setComponent={setComponent} />
  );
}
