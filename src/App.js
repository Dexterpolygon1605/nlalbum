import React, { Component } from 'react';
import './App.css';
import Navigator from './Components/Navigator/Navigator';
import Products from './Components/Products/Products';
import Support from './Components/Support/Support';
import Signin from './Components/Signin/Signin';
import Signup from './Components/Signup/Signup';
import Footer from './Components/Footer/Footer';
import Profile from './Components/Profile/Profile';

const initialState = {
  route: 'homepage',
  inAcc: false,
  user: {
    id: '',
    name: '',
    email: '',
    favorites: 1,
    joined: '',
  },
  songs: {
    id: '',
    name: '',
    artist: '',
    numFavorites: '',
    type: '',
    image: ''
  }
}


class App extends Component {
  constructor() {
    super();
    this.state = initialState
    }


  favoritesCount = () => {
    fetch('http://localhost:3000/favorites', {
      method: 'put',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id: this.state.user.id,
      })
    })
      .then(response => response.json())
      .then(count => {
        this.setState(Object.assign(this.state.user, { favorites: count }))
      })
  }

  favoriteBtn = () => {
    this.favoritesCount();
  }

  loadUser = (data) => {
    this.setState({
      user: {
        id: data.id,
        name: data.name,
        email: data.email,
        favorites: data.favorites,
        joined: data.joined,
      }
    })
  }

  
  loadSongs = (data) => {
    this.setState({
      songs: {
        id: data.id,
        name: data.name,
        artist: data.artist,
        numFavorites: data.numFavorites,
        type: data.type,
        image: data.image
      }
    })
  }

  onRouteChange = (route) => {
    if (route === 'homepage') {
      this.setState(initialState)
      this.navDefault();
    } else if (route === 'homepageAcc') {
      this.setState({ inAcc: true })
      this.navDefault();
    }
    this.navDefault();
    this.setState({ route: route });
  }

  navDefault = () => {
    document.getElementById('main-nav').style.display = 'none';
    document.getElementById('dropD').style.display = 'none';
  }


  onChangeProfile = () => {
    if (document.getElementById('main-nav-profile').style.display === 'none') {
      document.getElementById('main-nav-profile').style.display = 'block';
    } else if (document.getElementById('main-nav-profile').style.display === 'block') {
      document.getElementById('main-nav-profile').style.display = 'none';
    }
  }

  render() {

    window.addEventListener('scroll', reveal);
    function reveal() {
      let reveals = document.querySelectorAll('.reveal');
      for (let i = 0; i < reveals.length; i++) {
        let windowHeight = window.innerHeight;
        let revealTop = reveals[i].getBoundingClientRect().top;
        let revealPoint = 150;
        if (revealTop < windowHeight - revealPoint) {
          reveals[i].classList.add('active')
        } else {
          reveals[i].classList.remove('active');
        }
      }
    }

    const { route, inAcc } = this.state;
    return (
      <div className="App">
        <Navigator inAcc={inAcc} loadUser={this.loadUser} onRouteChange={this.onRouteChange} />

        {route === 'homepage' || route === 'homepageAcc'
          ? <Products favoriteBtn={this.favoriteBtn} onRouteChange={this.onRouteChange} />
          : (route === 'signin'
            ? <Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
            : (route === 'signup'
              ? <Signup loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
              : (route === 'profile'
                ? <Profile 
                name={this.state.user.name}
                favorites={this.state.user.favorites} 
                email={this.state.user.email} 
                onRouteChange={this.onRouteChange} />
                : <Support onRouteChange={this.onRouteChange} />
              )
            )
          )
        }
        <Footer />
      </div>
    );
  }
}

export default App;
