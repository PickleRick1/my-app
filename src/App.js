import React from 'react';
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
import { initializeApp } from './redux/Reducer/appReducer';
import { withRouter } from './components/hoc/withRouter';
import Preloader from './components/common/Preloader/Preloader';
import { connect } from "react-redux";
import { compose } from 'redux';
class App extends React.Component {
  componentDidMount = () => { // компонента вмонтирована
    this.props.initializeApp(); // отправляем запрос в блл который там санку делает
  }
  render() {
    if (!this.props.initialized) {return <Preloader />}
    debugger
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
}
const mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized,
  } // стейт что придет в компоненту
}

export default compose(
  connect(mapStateToProps, { initializeApp }),
  withRouter,
)(App);
