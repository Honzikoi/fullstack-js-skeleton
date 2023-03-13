import './App.css';
import { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes,Link } from 'react-router-dom';
import OtherPage from "./OtherPage";
import MainComponent from "./MainComponent";

function App() {
  console.log("is this even working?")
  return (
    <Router>
      <Fragment>
      <header className='header'>
        <div>this is a multicontainer application</div>
        <Link to="/">Home</Link>
        <Link to="/otherpage">Other page</Link>
      </header>
      <div className="main">
        <Routes>
          <Route path="/" element={ <MainComponent /> } />
          <Route path="/otherpage" element={<OtherPage />} />
        </Routes>
      </div>
      </Fragment>
    </Router>
  );
}


export default App;
