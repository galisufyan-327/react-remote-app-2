import { useEffect, useState } from "react";
import "./App.css";
import {
  __federation_method_getRemote,
  __federation_method_setRemote,
} from "__federation__";
import { Provider, useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";

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
  const dispatch = useDispatch();

  useEffect(() => {
    //@ts-ignore
    DynamicRemoteStore().then((storeModule) => {
      dispatch({
        type: "menu/replaceMenuItems",
        payload: [
          { text: "Dashboard", to: "/dashboard" },
          { text: "Our Vision", to: "/vision" },
          { text: "Contact", to: "/contact" },
        ],
      });

      setStore(storeModule.store);
    });
  }, [dispatch]);

  if (!store) {
    return <div>Loading...</div>;
  }

  return (
    <Provider store={store}>
      <Box component="main" sx={{ p: 5 }}>
        <Routes>
          <Route path="/dashboard" element={<h1>Something on dashboard</h1>} />
          <Route
            path="/vision"
            element={<h1>Our Vision for this project</h1>}
          />

          {/* Using path="*"" means "match anything", so this route
          acts like a catch-all for URLs that we don't have explicit
          routes for. */}
          <Route path="*" element={<h1>Page not not Found</h1>} />
        </Routes>
      </Box>
    </Provider>
  );
};

export default App;
