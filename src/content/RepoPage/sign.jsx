import React, { Component } from 'react';
import Image1 from './gallery/facebook.png';
import Image2 from './gallery/google.png';
import Image3 from './gallery/images.mp4';
import './sign.css'


class Sign extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="form-box">
                <div className="btn-box">
                <h2>Login</h2>
                </div>
                
                <br />
                
                    <input type="text" className="input-field" placeholder="Users Id"/>
                <br/>
                    <input type="password" className="input-field" placeholder="Password"/>
                <br />
                <input type="checkbox" className="checkbox"  />
                <span className="password">Remaind me password</span>
                <span className="password">Forgot password?</span>
                <br />
                <button type="submit" className="submit-btn">Login</button>
                <br />
                <p>Or Sign Up Using</p>
                <div className="image">
                <a href=""><img src={Image1} className="sign" alt="" width="40px" height="40px"/></a>                
                <a href=""><img src={Image2} className="sign" alt="" width="40px" height="40px"/></a>
                <div className="video"><a href=""><video src={Image3} autoPlay loop height="40px" width="50px"></video></a></div>
                <br />

                <p className='p'>Or Sign Up Using</p>
                <a href="item.jsx">SIGN UP</a>
                </div>
            </div>
         );
    }
}
 
export default Sign;