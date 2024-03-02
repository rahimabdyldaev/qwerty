import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Main, Home } from './pages';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Main/>} path='/'>
          <Route element={<Home/>} path='/'/>
        </Route>
      </Routes>
    </Router>
  );
};

export default App;