import "./App.css";
import FirstTailwind from "./components/FirstTailwind";
import SecondTailwind from "./components/SecondTailwind";
import ThirdTailwind from "./components/ThirdTailwind";

function App() {
  return (
    <>
      <h2>======== first task ==========</h2>
      <FirstTailwind />

      <h2 className="mt-80">======== Second task ==========</h2>
      <SecondTailwind />

      <h2 className="mt-20">======== Third task ==========</h2>
      <ThirdTailwind />
    </>
  );
}

export default App;
