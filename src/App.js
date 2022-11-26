
import './App.css';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Dialogs from './components/Dialogs/Dialogs';
import { Route, Routes } from 'react-router-dom';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';

const App = (props) => {
  return (

    <div className='app-wrapper'>
      <Header />
      <Nav sidebar={props.state.sidebar} />
      {/*< />*/}
      <div className='app-wrapper-content'>
        <Routes>

          <Route path='/dialogs/*' element={<Dialogs dialogsPage={props.state.dialogsPage} dispatch={props.dispatch} />} />
          <Route path='/profile' element={<Profile profilePage={props.state.profilePage} dispatch={props.dispatch} />} />
          <Route path='/music' element={<Music />} />
          <Route path='/news' element={<News />} />
          <Route path='/settings' element={<Settings />} />
        </Routes>
      </div>

    </div>
  );
}


export default App;
