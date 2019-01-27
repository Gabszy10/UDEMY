import {Link} from 'react-router-dom';
import React, {Component} from 'react'
import { connect } from 'react-redux'
import {getUser, logout} from '../actions/userAction';

class Header extends Component {
    state = {  }
    render() { 
        return (  
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>

                        <Link className="navbar-brand" to="/">DIARY201</Link>
                    </div>

                    <div className="collapse navbar-collapse" id="myNavbar">
                        <ul className="nav navbar-nav navbar">
                        {
                            this.props.user === null ? (
                                <li><Link to="/login">Login</Link></li>
                            ) :(
                                <li><Link to="/logout" onClick={() => this.props.logout()}>Logout</Link></li>
                            )
                        }
                            
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

const mapStateToProps = (state) => ({
    user: state.user
})

 
export default connect(mapStateToProps, {getUser, logout})(Header);

