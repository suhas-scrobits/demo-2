import { Provider } from "react-redux";
import "./App.css";
import store from "./redux/app/store";
import RouteConfig from "./routes/RouteConfig";

function App() {
  return (
    <>
      <Provider store={store}>
        <RouteConfig />
      </Provider>
    </>
  );
}

export default App;
