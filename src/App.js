
import './App.css';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import { Route, Routes } from 'react-router-dom';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';

const App = (props) => {
  return (

    <div className='app-wrapper'>
      <Header />
      <Nav sidebar={props.state.sidebarPage} />
      {/*< />*/}
      <div className='app-wrapper-content'>
        <Routes>

          <Route path='/dialogs/*' element={<DialogsContainer store={props.store} />} />
          <Route path='/profile' element={<Profile store={props.store} />} />
          <Route path='/music' element={<Music />} />
          <Route path='/news' element={<News />} />
          <Route path='/settings' element={<Settings />} />
        </Routes>
      </div>

    </div>
  );
}


export default App;
