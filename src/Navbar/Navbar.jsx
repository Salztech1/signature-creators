import React, { Component } from 'react';
import logo from '../Images/creators.svg';
import './Navbar.css';
import { HashLink } from 'react-router-hash-link';
//import 'bootstrap/dist/css/bootstrap.min.css';



class Navbar extends Component {

  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked })
  }

render() {
  return (
    <div >
      <nav className='sticky'>
        <div>
          <a href="#" className='logoName' >
            <img src={logo} alt="" width='15%' />
            <h5 className='my-md-3' style={{fontSize:20}} >Signature Creators</h5>
          </a>
        </div>

        <div>
          <ul id='navbar' className={this.state.clicked ? "#navbar active" : "#navbar"} >
           <HashLink to='#' className='hash' smooth> <li><a className='active' href="">Welcome</a></li></HashLink>
            <HashLink to='#about' smooth className='hash'> <li><a href="">About Us</a></li> </HashLink>
            <HashLink to='#services' smooth className='hash'> <li><a href="">Services</a></li> </HashLink>
            <HashLink to='#contact' smooth className='hash'> <li><a href="">Contact</a></li> </HashLink>
          </ul>
        </div>

        <div id='mobile' onClick={this.handleClick}>
          <i id='bar' className={this.state.clicked ? 'fa fa-times' : 'fa fa-bars'}></i>
        </div>

      </nav>
    </div>

  );
}
}

export default Navbar;