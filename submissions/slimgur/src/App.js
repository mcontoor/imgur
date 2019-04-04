import React, { Component } from 'react';
import './App.css';
import Header from './header.js';
import SmallCard from './middle.js';
import Footer from './footer.js';


class App extends Component {

  render() {
    return (
      <div>
        <Header />
        <div className="row">
          <div className="col-sm-2">
           <SmallCard />
          </div>
          <div className="col-sm-2">
           <SmallCard />
          </div>
          <div className="col-sm-2">
           <SmallCard />
          </div>
          <div className="col-sm-2">
           <SmallCard />
          </div>
          <div className="col-sm-2">
           <SmallCard />
          </div>
          <div className="col-sm-2">
           <SmallCard />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
