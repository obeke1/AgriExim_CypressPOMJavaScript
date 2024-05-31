import { homePage } from "../../pages/home"; //import homePage class from home javascript
const homeobj=new homePage();   //create homeobj for homePage class

describe('Test Automation',()=>{

    it('Home Page Flow',()=>{
        homeobj.openURL();
        homeobj.checkwhoarewe();
        homeobj.checktxtwhoarewe();
    })
})