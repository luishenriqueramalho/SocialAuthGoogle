import React, { Component } from 'react';

export class Dashboard extends Component {
    render() {

        /* const [name, setName] = useState("");
        const [email, setEmail] = useState("");
        const [url, setUrl] = useState("");

        const responseGoogle = response => {
            setName(response.profileObj.name);
            setEmail(response.profileObj.email);
            setUrl(response.profileObj.imageUrl);
        } */

        return (
            <div className="App">
                <h1>Dashboard</h1>
                {/* <h3>Bem Vindo: {name}</h3>
                <h3>Email: {email}</h3>
                <h3>{url}</h3> */}
            </div>
        )
    }
}

export default Dashboard;