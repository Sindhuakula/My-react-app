import React, { Component } from 'react';
import './icon-style.css';
import ticketIconLogo from './hdh.png';
import recruitmentIconLogo from './download.jpg';
import employeeIconLogo from './Cap.png';
class IconClass extends Component {
    render() {
        return (
            <div className="IconClass">
                <div className="row col-lg-12 col-lg-12">
                    <div className="col-lg-2 col-md-2"></div>
                    <div className="col-lg-2 col-md-2 iconcol"><a
                        className="App-link"
                        href="#"
                        target="_parent"
                        rel="noopener noreferrer"
                    >
                        <img src={employeeIconLogo} className="Employee-logo" alt="employee-logo" /><br />Employee
                </a></div>
                    <div className="col-lg-1 col-md-1"></div>
                    <div className="col-lg-2 col-md-2 iconcol"><a
                        className="App-link"
                        href="#"
                        target="_parent"
                        rel="noopener noreferrer"
                    >
                        <img src={recruitmentIconLogo} className="Recruit-logo" alt="recruit-logo" /><br />Recruit
                </a></div>
                    <div className="col-lg-1 col-md-1"></div>
                    <div className="col-lg-2 col-md-2 iconcol"><a
                        className="App-link"
                        href="http://10.195.147.100:4000/"
                        target="_parent"
                        rel="noopener noreferrer"
                    >
                        <img src={ticketIconLogo} className="Ticket-logo" alt="ticket-logo" /><br />Tickets
                </a></div>
                    <div className="col-lg-2 col-md-2"></div>
                </div>
            </div>
        );
    }
}

export default IconClass;
