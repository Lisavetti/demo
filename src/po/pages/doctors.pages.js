import ListHeaderComponent from "../components/doctors/list-header.component";
import AddDoctorComponent from "../components/doctors/add-doctor.component";

class DoctorsPage {
    constructor() {
        this.doctorListHeader = new ListHeaderComponent();
        this.AddDoctorComponent = new AddDoctorComponent();
    }

    async open() {
        await browser.url('https://ej2.syncfusion.com/showcase/angular/appointmentplanner/#/doctors');
    }
}

export default DoctorsPage;