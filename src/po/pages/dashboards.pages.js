import SideMenuComponent from "../components/common/sidemenu.component";
import BasePage from "./base.pages";

class DashboardPage extends BasePage {
    constructor() {
        super('/showcase/angular/appointmentplanner/#/dashboard');
        this.sideMenu = new SideMenuComponent();
    } 
}

export default DashboardPage;