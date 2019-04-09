import React, { Component } from 'react';
import './App.css';
import Header from './header.js';
import SmallCard from './middle.js';
import Footer from './footer.js';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './login';


// class App extends Component {

//   render() {
//     return (
//       <div>
//         <Header />
//         <div className="row">
//           <div className="col-sm-2">
//            <SmallCard />
//           </div>
//           <div className="col-sm-2">
//            <SmallCard />
//           </div>
//           <div className="col-sm-2">
//            <SmallCard />
//           </div>
//           <div className="col-sm-2">
//            <SmallCard />
//           </div>
//           <div className="col-sm-2">
//            <SmallCard />
//           </div>
//           <div className="col-sm-2">
//            <SmallCard />
//           </div>
//         </div>
//         <Footer />
//       </div>
//     );
//   }
// }

class App extends Component{

  render(){
    return(

        <Router>
          <React.Fragment>
              <Header />
              <Footer />
          <main>
              <Route path = "/" Component ={SmallCard}/>
              <Route path = "/login" Component ={Login}/>
          </main>
          </React.Fragment>
        </Router>
    );
  }
}

export default App;

