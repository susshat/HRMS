import { Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Login from './page/Login';
import Profile from './page/Profile';

import Register from './page/Register';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Dashboard />}>
        <Route path='profile' element={<Profile />} />
      </Route>
      <Route path='login' element={<Login />} />
      <Route path='register' element={<Register />} />
    </Routes>
  );
}

export default App;
