//import axios from 'axios';
import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';
import { Redirect } from 'react-router-dom';

export class Logintbygoogle extends Component {
    state = {
        navigate: false
    }

    render() {

        const { navigate } = this.state;

        if (navigate) {
            return <Redirect to="/Dashboard" push={true} />
        }

        const responseGoogle = (response) => {
            console.log(response);
            this.setState({ navigate: true })
        }

        /* const { navigate } = this.state;
        if (navigate) {
            return <Redirect to="/" push={true} />
        } */

        return (
            <div>
                <p>Hello Login!!!</p>

                {/* <button onClick={() => this.setState({ navigate: true })}>
                    Dashboard
                </button> */}

                <GoogleLogin 
                    clientId="454272644919-5fosgnsig1v35gma25vfcnk30q6ld05q.apps.googleusercontent.com"
                    buttonText=" Login with Google"
                    onSuccess={responseGoogle}>
                </GoogleLogin>
            </div>
        )
    }
}

export default Logintbygoogle;