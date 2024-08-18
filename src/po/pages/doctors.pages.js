import ListHeaderComponent from "../components/doctors/list-header.component";
import AddDoctorComponent from "../components/doctors/add-doctor.component";
import BasePage from "./base.pages";

class DoctorsPage extends BasePage {
    constructor() {
        super('/showcase/angular/appointmentplanner/#/doctors')
        this.doctorListHeader = new ListHeaderComponent();
        this.AddDoctorComponent = new AddDoctorComponent();
    }
}

export default DoctorsPage;