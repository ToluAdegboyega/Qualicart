import React, { Component } from 'react';
import './styles.scss';
import Buttons from './../Forms/Button';
import { signInWithGoogle } from '../../firebase/utils';

class SignIn extends Component {
    handleSubmit = async e => {
        e.preventDefault();
    }

    render() {
        return (
            <div className="signin">
                <div className="signinWrap">
                    <h2>
                        Login
                    </h2>
                    <div className="formWrap">
                        <form onSubmit={this.handleSubmit}>
                            <div className="socialSignin">
                                <div className="row">
                                    <Buttons onClick={signInWithGoogle} >
                                        Sign In with Google
                                    </Buttons>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    };
};

export default SignIn;
