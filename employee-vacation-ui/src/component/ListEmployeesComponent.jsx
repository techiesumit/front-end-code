import React, { Component } from 'react';
import EmployeesDataService from '../services/EmployeesDataService';
class ListEmployeesComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            employee: [],
            message: null
        }
        this.refreshEmployees = this.refreshEmployees.bind(this);
        this.updateEmployeeClicked= this.updateEmployeeClicked.bind(this);
    }

    componentDidMount() {
        this.refreshEmployees();
    }

    refreshEmployees() {
        EmployeesDataService.retrieveAllEmployees()
            .then(
                response => {
                    console.log(response);
                    this.setState({ employee: response.data })
                }
            )
    }

    updateEmployeeClicked(employee_id) {
        console.log("Updating the Employee ID " + employee_id);
        this.props.history.push(`/employee/${employee_id}`);

    }


    render() {
        return (
            <div className="container">
                <h3>All Employees</h3>
                {this.state.message && <div class="alert alert-success">{this.state.message}</div>}
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Type</th>
                                <th>Work Days</th>
                                <th> Vaction Days</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                            this.state.employee.map(employee =>
                                <tr key={employee.employee_id}>
                                    <td>{employee.employee_id}</td>
                                    <td>{employee.employee_type}</td>
                                    <td>{employee.workDays}</td>
                                    <td>{employee.vacationDays}</td>
                                    <td><button className="btn btn-success"
                                     onClick={() => this.updateEmployeeClicked(employee.employee_id)}>Update</button></td>
                                    <tr>{employee.errorMessage}</tr>
                                </tr>
                                
                            )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default ListEmployeesComponent