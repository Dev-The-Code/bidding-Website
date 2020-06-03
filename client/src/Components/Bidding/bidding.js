import React, { Component } from 'react';
import Biddpanel1 from './biddpanel1';
import './bidding.scss';

class Bidding extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dropDownUser: false,
      data: ''
    }
  }

  componentWillMount() {
    window.scrollTo(0, 0);
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
      <div>

        <div className="row">
          <Biddpanel1 />
          <Biddpanel1 />
          <Biddpanel1 />
          <Biddpanel1 />
          <Biddpanel1 />
          <Biddpanel1 />
          <Biddpanel1 />
          <Biddpanel1 />
          <Biddpanel1 />
          <Biddpanel1 />
          <Biddpanel1 />
        </div>
      </div>
    );
  }
}

export default Bidding;
