
import './App.css';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Dialogs from './components/Dialogs/Dialogs';

const App = () => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Nav />
      {/*<Profile />*/}
      <Dialogs className='app-wrapper-content'/>
    </div>
  );
}


export default App;
