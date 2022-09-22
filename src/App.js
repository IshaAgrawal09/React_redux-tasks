import "./App.css";
import { Provider } from "react-redux";
import CakeContainer from "./Components/Cakeontainer";
import store from "./Redux/Store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
      </div>
    </Provider>
  );
}

export default App;
