import CustomContainer from "./components/materialuicomponents/CustomContainer";
import StyledContainer from "./components/styledcomponents/StyledContainer";
import { Routes, Route } from "react-router-dom";
import SignInComponent from "./components/materialuicomponents/SignInComponent";
function App() {
  return (
    <div className="App">
      <main>
        <Routes>
          <Route path = '/' element= {<SignInComponent/>}></Route>
          <Route path="/home" element={<CustomContainer />}></Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
