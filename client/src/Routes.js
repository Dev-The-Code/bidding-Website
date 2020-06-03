import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';


//Components//
import './App.css';

import MainPage from './Components/HomePage/homePage';
import About from './Components/About Selmore/about';
import Faq from './Components/Faq/faq';
import Contactpage from './Components/Contact Page/contact';
import Bidding from './Components/Bidding/bidding';
import Billofbidding1 from './Components/Billboard of bidding1/billofbidding';
import './App.css';
import LogOut from './Components/LogOut/logOut'
import ProfileView from './Components/Profile/profile';
import { Provider } from 'react-redux';
import store from './store';
import AddBillboards from './Components/BillboardForm/addBillboards';
import MarketPlace from './Components/MarketPlace/marketPlace';
import Dashboard from './Components/Dashboard/dashboard';
import Carts from './Components/Carts of Book billboards/carts';


class Routes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dropDownUser: false,
      showHome: false,
    }
  }
  showDropDown = () => {
    this.setState({
      dropDownUser: true
    })
  }
  hideDropDown = () => {
    this.setState({
      dropDownUser: false
    })
  }

  render() {
    return (
      <div className='App'>
        <Provider store={store}>
          <BrowserRouter>
            <div>
            <Route path="/"
                render={props => {
                  return <MainPage {...props}
                    showDropDown={this.showDropDown} dropDownUser={this.dropDownUser}
                    hideDropDown={this.hideDropDown} />
                }}
              ></Route>
              <Route path="/about"
                render={props => {
                  return <About {...props}
                    showDropDown={this.showDropDown} dropDownUser={this.dropDownUser}
                    hideDropDown={this.hideDropDown} />
                }}
              ></Route>

              <Route path="/faq"
                render={props => {
                  return <Faq {...props}
                    showDropDown={this.showDropDown} dropDownUser={this.dropDownUser}
                    hideDropDown={this.hideDropDown} />
                }}
              ></Route>
              <Route path="/contact"
                render={props => {
                  return <Contactpage {...props}
                    showDropDown={this.showDropDown} dropDownUser={this.dropDownUser}
                    hideDropDown={this.hideDropDown} />
                }}
              ></Route>
              <Route path="/bidding"
                render={props => {
                  return <Bidding {...props}
                    showDropDown={this.showDropDown} dropDownUser={this.dropDownUser}
                    hideDropDown={this.hideDropDown} />
                }}
              ></Route>
              <Route path="/bidding_detail/:value"
                render={props => {
                  return <Billofbidding1 {...props}
                    showDropDown={this.showDropDown} dropDownUser={this.dropDownUser}
                    hideDropDown={this.hideDropDown} />
                }}
              ></Route>

              
              <Route path="/cart"
                render={props => {
                  return <Carts {...props}
                    showDropDown={this.showDropDown} dropDownUser={this.dropDownUser}
                    hideDropDown={this.hideDropDown} />
                }}
              ></Route>
              <Route path="/profile"
                render={props => {
                  return <ProfileView {...props}
                    showDropDown={this.showDropDown} dropDownUser={this.dropDownUser}
                    hideDropDown={this.hideDropDown} />
                }}
              ></Route>
              <Route path="/"
                render={props => {
                  return <LogOut {...props}
                    showDropDown={this.showDropDown} dropDownUser={this.dropDownUser}
                    hideDropDown={this.hideDropDown} />
                }}
              ></Route>
              <Route path="/list_add"
                render={props => {
                  return <AddBillboards {...props}
                    showDropDown={this.showDropDown} dropDownUser={this.dropDownUser}
                    hideDropDown={this.hideDropDown} />
                }}
              ></Route>


              <Route path='/market_place'

                render={props => {
                  return <MarketPlace {...props}
                    showDropDown={this.showDropDown} dropDownUser={this.dropDownUser}
                    hideDropDown={this.hideDropDown} />
                }}
              ></Route>
              <Route path='/dashboard'
                render={props => {
                  return <Dashboard {...props}
                    showDropDown={this.showDropDown} dropDownUser={this.dropDownUser}
                    hideDropDown={this.hideDropDown} />
                }}
              ></Route>
            </div>
          </BrowserRouter>
        </Provider>
      </div >
    );
  }
}

export default Routes;
