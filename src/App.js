import "./App.css";
import { BrowserRouter, Route,Routes } from "react-router-dom"; // import Route

import "./vendors/bootstrap/css/bootstrap.min.css";
import "./vendors/bootstrap/bootstrap.min.css";
import "./vendors/fontawesome/css/all.min.css";

import HelloWorld from "./components/HelloWorld"; // no .js extension needed    imports HelloWorld.js
import Labs from "./components/Labs"; // imports Labs.js
import Tuiter from "./components/Tuiter"; // imports Tuiter.js
import HomeScreen from "./components/Tuiter/home-screen/index";
import ExploreScreen from "./components/Tuiter/ExploreScreen/ExploreScreen";
import ProfileScreen from "./components/Tuiter/profile";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/">
            <Route path="/" element={<Labs />} />
            <Route path="lab" exact={true} element={<Labs />} />

            <Route path="hello" exact={true} element={<HelloWorld />} />
            <Route path="tuiter" exact={true} element={<Tuiter />}>
              <Route index element={<HomeScreen />} />
              <Route path="home" element={<HomeScreen />} />
              <Route path="explore" element={<ExploreScreen />} />
              <Route path="profile" element={<ProfileScreen/>} />
            </Route>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       We can edit it here!!!!
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
