import './App.css';
import Navbar from './Components/Navbar.js'
import Footer from './Components/Footer.js'
import Textarea from './Components/Textarea.js'
import Alert from './Components/Alert.js'
import About from './Components/About.js'
import React, { useState } from 'react'

// Importing content from react router dom
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {

  const light = {
    backgroundColor: "white",
    color: "black"
  }

  const fancy = {
    backgroundColor: "#e8d091",
    color: "black"
  }

  const dark = {
    backgroundColor: "#3a3838",
    color: "white"
  }

  const purple = {
    backgroundColor: "rgb(36 1 36)",
    color: "white"
  }

  const green = {
    backgroundColor: "#023902",
    color: "white"
  }

  const blue = {
    backgroundColor: "#b3f3f3",
    color: "black"
  }

  // states can be variables, objects or text 

  const [mode, setMode] = useState("light");
  // const [modeText, setModeText] = useState("Enable Dark Mode");
  const [myStyle, setMyStyle] = useState(light);

  const [alert, setAlert] = useState(null);

  function alertText(message, status) {

    setAlert({
      msg: message,
      type: status
    });

    setTimeout(() => {
      setAlert(null);
    }, 2000);

  }
  function lightMode() {
    setMode("light");
    setMyStyle(light);

    alertText("Light Theme is enabled", "success");
    // document.title = "TextConverter - Light";
  }

  function grayMode() {

    // setModeText("Enable light Mode");
    setMode("dark");
    setMyStyle(dark);

    alertText("Dark Theme is enabled", "success");
    // document.title = "TextConverter - Dark";

  }

  function purpleMode() {
    setMode("dark");
    setMyStyle(purple);

    alertText("Purple Theme is enabled", "success");
    // document.title = "TextConverter - Purple";

  }

  function greenMode() {
    setMode("dark");
    setMyStyle(green);

    alertText("Green Theme is enabled", "success");
    // document.title = "TextConverter - Green";

  }

  function fancyMode() {
    setMode("dark");
    setMyStyle(fancy);

    alertText("Fancy Theme is enabled", "success");
    // document.title = "TextConverter - Fancy";

  }

  function blueMode() {
    setMode("dark");
    setMyStyle(blue);

    alertText("Sky Blue Theme is enabled", "success");
    // document.title = "TextConverter - Blue";

  }


  return (
    // The html code which is written inside a block in a JS file is called as JSX 
    // replace class with className
    // replace for with htmlFor
    // make href = '#' as href = '/'
    // if there is no any end tag for any tag then write / in ending of that tag
    // to use a js variable into jsx then write your variable like {varName}
    <>
      <Router>
        <div className="body" style={myStyle}>
          <Navbar title="TextConverter" aboutText="About" mode={mode} gray={grayMode} Light={lightMode} Purple={purpleMode} green={greenMode} fancy={fancyMode} blue={blueMode} /> {/* navbar is a custom component */}
          {/* Attributes which we give in our component tag is called as props */}

          <Alert alert={alert} />

          <Switch>
            <Route exact path="/">
              <Textarea mode={mode} myStyle={myStyle} alert={alertText} />
            </Route>
            <Route exact path="/about">
              <About myStyle={myStyle} />
            </Route>
          </Switch>


          <Footer />

        </div>
      </Router>
    </>

  );
}

export default App;

