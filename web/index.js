import * as React from "react";
import * as Client from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");
const root = Client.createRoot(rootElement);

root.render(<App />);
