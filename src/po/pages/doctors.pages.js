import BasePage from "./base.pages";

import { ListHeaderComponent, AddDoctorComponent } from '../../po/components/index.js';


class DoctorsPage extends BasePage {
    constructor() {
        super('/showcase/angular/appointmentplanner/#/doctors')
        this.doctorListHeader = new ListHeaderComponent();
        this.AddDoctorComponent = new AddDoctorComponent();
    }
}

export default DoctorsPage;