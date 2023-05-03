/*index.js*/

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <GoogleOAuthProvider clientId="39073281680-rr3jevi35c20fjkmup5au4vk4k784bng.apps.googleusercontent.com">
      <App />
    </GoogleOAuthProvider>
  </BrowserRouter>
);

// import React from "react";
// import ReactDOM from "react-dom";
// import { GoogleOAuthProvider } from "@react-oauth/google";
// import App from "./App";
// import { BrowserRouter } from "react-router-dom";
//
// ReactDOM.render(
//   <GoogleOAuthProvider clientId="39073281680-rr3jevi35c20fjkmup5au4vk4k784bng.apps.googleusercontent.com">
//     <React.StrictMode>
//       <BrowserRouter>
//         <App />
//       </BrowserRouter>
//     </React.StrictMode>
//   </GoogleOAuthProvider>,
//   document.getElementById("root")
// );
