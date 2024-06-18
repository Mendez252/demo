import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import SectionProvider from "./contexts/SectionContext.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <SectionProvider>
      <App />
    </SectionProvider>
  </BrowserRouter>
);
