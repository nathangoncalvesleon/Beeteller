import{BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Login from './components/pages/Login/Login';
import Main from './components/pages/Main/Main';
function App() {
  return (
      <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </Router>
  );
}

export default App;
