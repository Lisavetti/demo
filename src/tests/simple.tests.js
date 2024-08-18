import DashboardPage from '../po/pages/dashboards.pages';
import DoctorsPage from '../po/pages/doctors.pages';

const dashboarsPage = new DashboardPage();
const doctorPage = new DoctorsPage();

describe("Doctors page", () => {
    beforeEach(async () => {
        await dashboarsPage.open();
    })


    it('Check page title', async () => {
        await expect(browser).toHaveTitle('Appointment Planner - Syncfusion Angular Components Showcase App');
    });

    it('Open modal window for adding a new doctor', async () => {
        //click on doctors item in the side menu
        await dashboarsPage.sideMenu.item('doctors').click();
        //click on add new doctor btn
        await doctorPage.doctorListHeader.addNewDoctorBtn.click();
        //ckeck that a modal window is displayed
        await expect(doctorPage.AddDoctorComponent.rootEl).toBeDisplayed();
    });


    it('Add a new doctor', async () => {
        //click on doctors item in the side menu
        await dashboarsPage.sideMenu.item('doctors').click();
        //click on add new doctor btn
        await doctorPage.doctorListHeader.addNewDoctorBtn.click();
        //wait for visibility of modal window
        await (doctorPage.AddDoctorComponent.rootEl).waitForDisplayed();

        await $('[name="Name"]').setValue('John Doe');
        await $('#DoctorMobile').setValue('1111111111');
        await $('[name="Email"]').setValue('test@gmail.com');
        await $('[name="Education"]').setValue('Basic');
        await $('[name="Designation"]').setValue('Test');

        await $('.e-footer-content button.e-primary').click();

        await expect(doctorPage.AddDoctorComponent.rootEl).not.toBeDisplayed();

        expect($('#Specialist_8').$('.name')).toHaveText('John Doe');
        expect($('#Specialist_8').$('.education')).toHaveText('Basic');
    })

    it('Close a modal window for adding a new doctor', async () => {
        await dashboarsPage.sideMenu.item('doctors').click();
        await doctorPage.doctorListHeader.addNewDoctorBtn.click();
        await (doctorPage.AddDoctorComponent.rootEl).waitForDisplayed();
        await $('.new-doctor-dialog .e-btn-icon').click();
        await expect(doctorPage.AddDoctorComponent.rootEl).not.toBeDisplayed();
    })
})