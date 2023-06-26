import React from "react";
import ReactDOM from "react-dom/client";
// components
import Root from "@root/components/root";
// styles
import "@root/styles/reset.scss";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);
