import React from "react";
import Index from "./pages/Index";
import FamilyLogin from "./pages/Family/Login";
import MateLogin from "./pages/Mate/Login";

class App {
  render() {
    return (
      <div className="App">
        <Index/>
        
        <Routes>
            <Route path="/suitefamily/login" element={<FamilyLogin/>} />
            <Route path="/suitemate/login" element={<MateLogin/>} />
        </Routes>
      </div>
    );
  }
}

export default App;
