import { Renderer } from 'components/Renderer';
import { SettingsPanel } from 'components/SettingsPanel';

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
