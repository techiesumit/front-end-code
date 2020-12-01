import { Formik, Form, Field, ErrorMessage } from 'formik';
import React, { Component } from 'react';
import EmployeesDataService from '../services/EmployeesDataService';

class EmployeeComponent extends Component {
 
    constructor(props) {
        super(props)

        this.state = {
            emp_id: this.props.match.params.employee_id,
            employee: []
        }

        this.onSubmit = this.onSubmit.bind(this)
        this.validate = this.validate.bind(this)

    }

    componentDidMount() {

        //console.log("Emp id "+this.state.emp_id)

        if (this.state.id <= 0) {
            return
        }

        EmployeesDataService.retriveEmployee(this.state.emp_id)
            .then(
                response => {
                    // console.log("Response from Service "+ response.data);
                    this.setState({ employee: response.data });
                    
                })
    }

    onSubmit(values) {
      
        EmployeesDataService.updateVacationAndWorkDays(values.employee_id, values.vacationDays, values.workDays)
            .then(() => this.props.history.push('/employees'));

    }
    validate(values) {
        let errors = {}
        if (values.workDays < 0 ) {
            errors.workDays = 'Invalid Value'
        }
        // We can add validation for each type of employee as well if needed
        if (values.vacationDays < 0 ) {
            errors.vacationDays = 'Invalid Value'
        }
        return errors
    }

    render() {
        console.log("Employee Record in State");
        console.log(this.state.employee);
        return (
            <div>
                <h3>Update Employee Record</h3>
                <div className="container">
                    <Formik
                        initialValues={{
                            employee_id: this.state.employee.employee_id,
                            employee_type: this.state.employee.employee_type,
                            workDays: 0,
                            vacationDays: 0
                        }}
                        onSubmit={this.onSubmit}
                        validateOnChange={false}
                        validateOnBlur={false}
                        validate={this.validate}
                        enableReinitialize={true} >
                        {
                            (props) => (
                                <Form>

                                    <fieldset className="form-group">
                                        <label>Employee Id</label>
                                        <Field className="form-control" type="text" name="employee_id" disabled />
                                        <label>Employee Type</label>
                                        <Field className="form-control" type="text" name="employee_type" disabled />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Work Days</label>
                                        <Field className="form-control" type="number" name="workDays" />
                                        <ErrorMessage name="workDays" component="div"
                                            className="alert alert-warning" />
                                        <label>Vacation Taken (In Days )</label>
                                        <Field className="form-control" type="number" name="vacationDays" />
                                        <ErrorMessage name="vacationDays" component="div"
                                            className="alert alert-warning" />
                                    </fieldset>
                                    <button className="btn btn-success" type="submit">Update</button>
                                </Form>
                            )
                        }
                    </Formik>
                </div>
            </div>

        )
    }

}
export default EmployeeComponent