describe("Doctors page", () => {
    beforeEach(async () => {
        await browser.url('https://ej2.syncfusion.com/showcase/angular/appointmentplanner/#/dashboard');
    })


    it('Check page title', async () => {
        await expect(browser).toHaveTitle('Appointment Planner - Syncfusion Angular Components Showcase App');
    });

    it('Open modal window for adding a new doctor', async () => {
        //click on doctors item in the side menu
        const doctotItem = await $('[routerlink="/doctors"]');
        await doctotItem.click();
        //click on add new doctor btn
        await $('.specialization-types button.e-control').click();
        //ckeck that a modal window is displayed
        await expect($('.new-doctor-dialog')).toBeDisplayed();
    });


    it('Add a new doctor', async () => {
        //click on doctors item in the side menu
        await $('[routerlink="/doctors"]').click();
        //click on add new doctor btn
        await $('.specialization-types button.e-control').click();
        //wait for visibility of modal window
        await ($('.new-doctor-dialog')).waitForDisplayed();

        await $('[name="Name"]').setValue('John Doe');
        await $('#DoctorMobile').setValue('1111111111');
        await $('[name="Email"]').setValue('test@gmail.com');
        await $('[name="Education"]').setValue('Basic');
        await $('[name="Designation"]').setValue('Test');

        await $('.e-footer-content button.e-primary').click();

        await expect($('.new-doctor-dialog')).not.toBeDisplayed();

        expect($('#Specialist_8').$('.name')).toHaveText('John Doe');
        expect($('#Specialist_8').$('.education')).toHaveText('Basic');
    })

    it('Close a modal window for adding a new doctor', async () => {
        await $('[routerlink="/doctors"]').click();
        await $('.specialization-types button.e-control').click();
        await $('.new-doctor-dialog').waitForDisplayed();
        await $('.new-doctor-dialog .e-btn-icon').click();
        await expect($('.new-doctor-dialog')).not.toBeDisplayed();
    })
})