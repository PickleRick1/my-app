
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import { Route, Routes } from 'react-router-dom';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import NavContainer from './components/Nav/NavContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import Login from './components/Login/Login';

const App = (props) => {
  return (

    <div className='app-wrapper'>
      <HeaderContainer />
      <NavContainer />
      <div className='app-wrapper-content'>
        <Routes>

          <Route path='/dialogs/*' element={<DialogsContainer />} /> {/* роуты нужны чтоб попадать на типа другие стр, но по сути менять урл, звезда нужна что мы оставались на том же урле, но могли к нему чет добавить типа диалог/1*/}
          <Route path='/profile' element={<ProfileContainer />} />
          <Route path='profile/:userId' element={<ProfileContainer />} />{/* userID - переменная которую мы хотим получить с урла*/}
          <Route path='/music' element={<Music />} />
          <Route path='/news' element={<News />} />
          <Route path='/settings' element={<Settings />} />
          <Route path='/users' element={<UsersContainer />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </div>

    </div>
  );
}


export default App;
