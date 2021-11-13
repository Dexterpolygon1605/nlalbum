import React, { Component } from 'react';
import './App.css';
import Navigator from './Components/Navigator/Navigator';
import Products from './Components/Products/Products';
import Support from './Components/Support/Support';
import Signin from './Components/Signin/Signin';
import Signup from './Components/Signup/Signup';
import Footer from './Components/Footer/Footer';

const initialState = {
  route: 'homepage',
  inAlbums: false
}

class App extends Component {
  constructor() {
    super();
    this.state = initialState
  }

  onRouteChange = (route) => {
    if (route === 'homepage') {
      this.setState(initialState)
      this.navDefault();
    } else if (route === 'albums') {
      this.setState({ inAlbums: true })
      this.navDefault();
    }
    this.navDefault();
    this.setState({ route: route });
  }

  navDefault = () => {
    document.getElementById('main-nav').style.display = 'none';
    document.getElementById('dropD').style.display = 'none';
  }

  render() {
    const { inAlbums, route } = this.state;
    return (
      <div className="App">
        <Navigator inAlbums={inAlbums} onRouteChange={this.onRouteChange} />

        {route === 'homepage'
          ? <Products inAlbums={inAlbums} onRouteChange={this.onRouteChange} />
          : (route === 'signin'
            ? <Signin inAlbums={inAlbums} onRouteChange={this.onRouteChange} />
            : (route === 'signup'
              ? <Signup inAlbums={inAlbums} onRouteChange={this.onRouteChange} />
              : <Support inAlbums={inAlbums} onRouteChange={this.onRouteChange} />
            )
          )
        }
        <Footer />
      </div>
    );
  }
}

export default App;
