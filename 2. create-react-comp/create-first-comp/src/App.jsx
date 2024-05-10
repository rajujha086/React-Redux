// import KgButton from "./KgButton"; // Multiple name exports (ye bhi option kar sakte hai)
import { KgButton } from "./KgButton"; // Multiple name exports (ye bhi option kar sakte hai)
import Hello from "./Hello";
import Random from "./Random";

function App() {
  return (
    <div>
      <h1>This is the best React course</h1>
      {/* <button>Subscribe</button> */}
      <KgButton></KgButton>

      <Hello></Hello>
      <Random></Random>
      <Random></Random>
      <Random></Random>
      <Random></Random>
      <Random></Random>
    </div>
  );
}

export default App;
