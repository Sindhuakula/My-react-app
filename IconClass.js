import React, { Component } from 'react';
import IcoMoon from 'react-icomoon';
import './icon-style.css';
class IconClass extends Component {
    render() {
        return (
            <div className="IconClass" className="row">
                <div className="col-sm-1"></div>
                <div className="col-sm-1"></div>
                <div className="col-sm-2"><a
                    className="App-link"
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <IcoMoon icon="users" /><br />Employee
                </a></div>
                <div className="col-sm-1"></div>
                <div className="col-sm-2"><a
                    className="App-link"
                    href="https://www.versa-networks.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <IcoMoon icon="file-text" /><br />Recruitment
                </a></div>
                <div className="col-sm-1"></div>
                <div className="col-sm-2"><a
                    className="App-link"
                    href="http://10.195.147.100:4000/"
                    target="_parent"
                    rel="noopener noreferrer"
                >
                    <IcoMoon icon="ticket" /><br />Tickets
                </a></div>
            </div>
        );
    }
}

export default IconClass;
