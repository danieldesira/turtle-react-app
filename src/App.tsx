import { RouterProvider } from "react-router";
import "./App.css";
import { routes } from "./routes";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./store";

function App() {
  return (
    <ReduxProvider store={store}>
      <RouterProvider router={routes} />
    </ReduxProvider>
  );
}

export default App;
