import { Routes, Route, Outlet } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Login from './page/Login';
import Profile from './page/Profile';

import UpdateProfile from './components/UpdateProfile';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Dashboard />}>
        <Route path='profile'>
          <Route index element={<Profile />} />
          <Route path='register' element={<UpdateProfile />} />
        </Route>
      </Route>
      <Route path='login' element={<Login />} />
      <Route path='register' element={<UpdateProfile />} />
    </Routes>
  );
}

export default App;
