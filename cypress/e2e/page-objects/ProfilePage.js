/// <reference types="cypress" />
import BasePage from "./BasePage";
import LoginPage from "./LoginPage";
import credentials from "../../fixtures/credentials.json";

class ProfilePage extends BasePage {

    get profileMenu() {
        return cy.get('[routerlink="profile"]');
    }

    get profileName() {
return cy.get('.profile_name.display-4');
    }

    get profileBirthday() {
        return cy.get('.profile-info_item:first-child');
    }

    get profileCountry() {
        return cy.get('.profile-info_item:last-child')
    }


    open() {
        super.open('');
        LoginPage.signIn(credentials.email, credentials.password);
        cy.url().should('eq', 'https://qauto.forstudy.space/panel/garage');
        this.profileMenu.click();
        cy.url().should('eq', 'https://qauto.forstudy.space/panel/profile');
    }
}

export default new ProfilePage();