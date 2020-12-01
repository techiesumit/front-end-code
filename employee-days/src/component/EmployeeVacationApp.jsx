import React, { Component } from 'react';
import ListEmployeesComponent from './ListEmployeesComponent';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import EmployeeComponent from './EmployeeComponent';

class EmployeeVacationApp extends Component {
    render() {
        return (
            <Router>
                <>
                <h1>Employee Vacation  UI</h1>
                <Switch>
                    <Route path="/" exact component={ListEmployeesComponent} />
                    <Route path="/employees" exact component={ListEmployeesComponent} />
                    <Route path="/employee/:employee_id" component={EmployeeComponent} />
                </Switch>
                </>
            </Router>

        )
    }
}

export default EmployeeVacationApp