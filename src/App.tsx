import { Renderer } from 'components/BaseRenderer';
import { SettingsPanel } from 'components/settings/SettingsPanel';

function App() {
  return (
    <>
      <SettingsPanel />
      <div style={{ height: 100 }} />
      <Renderer />
    </>
  );
}

export default App;
