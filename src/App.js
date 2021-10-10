// import logo from './logo.svg';
import "./App.css";
import Appbars from "./components/Appbar";
import UploadQuestion from "./srikanth/UploadQuestion";
import SearchView from "./kavithas/SearchView";
// import UploadQuestion from "./srikanth/UploadQuestion"
// import SearchView from "./kavithas/SearchView"
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import routing from "./routing";
import { useEffect, useState } from "react";
import Navexample from "./components/Appbar";

function App() {
  return (
    <div className="App">
      <Router>
        <Appbars />

        <hr style={{ color: "#707070" }} />

        {/* {routing} */}

        <div>
          <Route path="/" component={UploadQuestion} exact />
        </div>
        <div>
          <Route path="/SearchView" component={SearchView} exact />
        </div>

        {/* <Appbar /> */}
        {/* <UploadQuestion /> */}

        {/* <SearchView /> */}
      </Router>
    </div>
  );
}

export default App;
