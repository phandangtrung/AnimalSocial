import HomePage from "../src/features/HomePage";
import Rightbar from "../src/components/Rightbar";
import Leftbar from "./components/Leftbar";
import Header from "./components/Header";
function App() {
  return (
    <div>
      <Header />
      <Leftbar />
      <Rightbar />
      <HomePage />
    </div>
  );
}

export default App;
