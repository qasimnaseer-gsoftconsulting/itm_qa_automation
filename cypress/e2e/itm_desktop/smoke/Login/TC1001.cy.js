
import { desktop_common_object } from "../../../../support/pageObjects";

describe('[TC1001]', () => {
    let tcCommonData; // tcCommonData variable outside the hooks
  
    beforeEach(() => {
      // Runs before each test in the describe block
      desktop_common_object.itm_setViewPortForDesktop();
      cy.fixture('desktop/common-data').then((data) => {
        tcCommonData = data;
      });
    });
  
    it('Title : Login with correct credentials', () => {

        //Step 1 : Visit the login page
        desktop_common_object.itm_login_page();

        //Step 2 : Type email in login form
        const email = Cypress.env('email');
        desktop_common_object.itm_login_emailFeild().should('exist').type(email);

        //Step 3 : Type password in login form
        const password = Cypress.env('password');
        desktop_common_object.itm_login_passwordFeild().should('exist').type(password);

        //Step 4 : Click on login button
        desktop_common_object.btn(tcCommonData.loginBtn).should('exist').click();

        //Step 5 : Verify dashboard
        cy.contains(tcCommonData.verification_login_by_personal_board_title).should('exist').and('be.visible');
  
    });
  
  
  });