import React, { Component } from 'react'

export default class Dashboard extends Component {
    render() {
        return (
            <>
            <center><h1>Dashboard</h1></center>
            <div>
            <button type="submit" className="dashboard"><a href="./My_Details"> My Details Section</a></button>
            </div>
            <div>
            <button type="submit" className="dashboard"><a href="./My_Manager_Details">My Manager Details</a></button>
            </div>
            <div>
            <button type="submit" className="dashboard"><a href="./Apply_Leave">Apply leave</a></button>
            </div>
            <div>
            <button type="submit" className="dashboard"><a href="./Approve_Deny_Leave">Approve Deny Leave</a></button>
            </div>
            <div>
            <button type="submit" className="dashboard"><a href="./Leave_Details">My Leave Application</a></button>
            </div>
            <div>
            <button type="submit" className="dashboard"><a href="./Pending_Leaves">My Reporting Employees' Pending Leave Application</a></button>
            </div>
            </>
        )
    }
}
