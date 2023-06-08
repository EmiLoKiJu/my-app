import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
} from 'react-router-dom';

import './App.css';
import Calculator from './components/Calculator';
import ApiNinja from './components/apicall';
import Home from './components/home';

function Layout() {
  return (
    <div className="body">
      <div className="dflex spacebetween navcont">
        <h1>Math Magicians</h1>
        <div className="dflex mr10">
          <h2 className="h2-class"><a href=".">Home</a></h2>
          <h2 className="h2-class"><a href="./calculator">Calculator</a></h2>
          <h2 className="h2-class"><a href="./quote">Quote</a></h2>
        </div>
      </div>
      <div className="dflex spacebetween"><Outlet /></div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="quote" element={<ApiNinja />} />
          <Route path="calculator" element={<Calculator />} />
          <Route path="*" element={<div>If page not found it goes here</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
