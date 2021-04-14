import { Renderer } from 'components/Renderer';
import { RecoilRoot } from 'recoil';

function App() {
  return (
    <RecoilRoot>
      <div>Hello World!</div>
      <Renderer />
    </RecoilRoot>
  );
}

export default App;
