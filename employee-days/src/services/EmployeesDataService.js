import axios from 'axios'

const EMPLOYEE_SERVICES_API_URI = '/api/v1/';
const EMPLOYEE_VACATION_BASE_URL = 'http://localhost:8080'
const EMPLOYEE_SERVICES_API = `${EMPLOYEE_VACATION_BASE_URL}/${EMPLOYEE_SERVICES_API_URI}`

class EmployeesDataService {

    retrieveAllEmployees() {
      //  console.log("Executing All Employees");
        return axios.get(`${EMPLOYEE_SERVICES_API}/employees`);
    }

    retriveEmployee(id) {
      //  console.log("Retrive Employee with ID " + id);
        return axios.get(`${EMPLOYEE_SERVICES_API}/employee/${id}`);
    }
    updateWorkDays(workDays) {
        console.log("Updating Employee workDays")
        return axios.put(`${EMPLOYEE_SERVICES_API}/workday/${workDays}`);
    }
    updateVacationdays(vacationDays) {
        console.log("Updating Employee vactions");
        return axios.put(`${EMPLOYEE_SERVICES_API}/vacation/${vacationDays}`);
    }
    updateVacationAndWorkDays(employee_id, vacationDays, workDays) {
        console.log('Updating Employee workDays for id '+employee_id)
        return axios.put(`${EMPLOYEE_SERVICES_API}/employee/${employee_id}/${vacationDays}/${workDays}`);
    }
}

export default new EmployeesDataService()