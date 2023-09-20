import "./App.css";
import Button from "@mui/material/Button";
import { RecoilRoot, atom, useRecoilValue, useSetRecoilState } from "recoil";


 export const CountState = atom({
  key :"countState",
  default: 0,

});

function App() {
 

  const Increase = () => {
    const setCount = useSetRecoilState(CountState);
    return (
      <Button
        variant="contained"
        onClick={() => setCount((count) => count + 1)}
      >
        increase
      </Button>
    );
  };
  const Decrease = () => {
    const setCount = useSetRecoilState(CountState);

    return (
      <Button
        variant="contained"
        onClick={() => setCount((count) => count - 1)}
      >
        decrease
      </Button>
    );
  };
  const CounterDisplay = () => {
    const count = useRecoilValue(CountState);
    return (
      <div>
        <h1> {count} </h1>
      </div>
    );
  };

  return (
    <RecoilRoot>
      <div className="card">
        <h1>Vite + React</h1>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Increase />
          <Decrease />
        </div>
        <CounterDisplay />
      </div>
    </RecoilRoot>
  );
}

export default App;
