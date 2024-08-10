import { useEffect, useState } from "react";
import "./App.css";
import {
  __federation_method_getRemote,
  __federation_method_setRemote,
} from "__federation__";
import { Provider } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import LandingPage from "./components/LandingPage";
import AboutPage from "./components/AboutPage";
import NotFoundPage from "./components/NotFoundPage";

const DynamicRemoteStore = () => {
  const url = import.meta.env.REACT_APP_STORE_URL;
  const name = "store";
  const module = "./store";

  __federation_method_setRemote(name, {
    url: () => Promise.resolve(url),
    format: "esm",
    from: "vite",
  });

  return __federation_method_getRemote(name, module);
};

const App = () => {
  const [store, setStore] = useState(null);

  useEffect(() => {
    //@ts-ignore
    DynamicRemoteStore().then((storeModule) => {
      setStore(storeModule.store);
    });
  }, []);

  if (!store) {
    return <div>Loading...</div>;
  }

  return (
    <Provider store={store}>
      <Box component="main" sx={{ p: 5 }}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutPage />} />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Box>
    </Provider>
  );
};

export default App;
