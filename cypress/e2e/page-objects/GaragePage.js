/// <reference types="cypress" />

import LoginPage from "../page-objects/LoginPage";
import BasePage from "./BasePage";
import credentials from "../../fixtures/credentials.json";


class GaragePage extends BasePage{

    get profileMenu() {
        return cy.get('[routerlink="profile"]');
    }

    open() {
        super.open('');
        LoginPage.signIn(credentials.email, credentials.password);
        cy.url().should('eq', 'https://qauto.forstudy.space/panel/garage');
    }

    clickProfileMenu() {
        this.profileMenu.click();
        cy.url().should('eq', 'https://qauto.forstudy.space/panel/profile');
    }

}

export default new GaragePage();