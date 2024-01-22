const baseURL = Cypress.env('baseURL');

const emailFieldAtLoginPage = '#txtUserName';
const passwordFieldAtLoginPage = '#txtPassword';

class desktop_common_objects {

    // for visiting login page
    itm_login_page(){
        cy.visit(baseURL);
        cy.url().should('equal',baseURL);
    }

    //set desktop viewport
    itm_setViewPortForDesktop() {
        cy.viewport(1550, 960, 'landscape');
    }

    //for usrname/email field on login page
    itm_login_emailFeild(){
        return cy.get(emailFieldAtLoginPage);
    }

    //for password field on login page
    itm_login_passwordFeild(){
        return cy.get(passwordFieldAtLoginPage);
    }

    //for buttons having common xpath
    btn(param){
        return cy.xpath('//input[@value="'+param+'"]');
    }
}

export default desktop_common_objects;