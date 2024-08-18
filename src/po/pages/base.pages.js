import { HeaderComponent, SideMenuComponent} from './../components/index.js'

class BasePage {
    constructor(url) {
        this.url = url;
        this.header = new HeaderComponent();
        this.sideMenu = new SideMenuComponent();
    }
    open() {
        return browser.url(this.url);
    }
}

export default BasePage;