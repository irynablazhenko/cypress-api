/// <reference types="cypress" />
import BasePage from "./BasePage";

class LoginPage extends BasePage {

    get signInBtn() {
        return cy.contains('Sign In');
    }

    get emailField() {
        return cy.get('#signinEmail');
    }

    get passwordField() {
        return cy.get('#signinPassword');
    }

    get loginButton() {
        return cy.contains('Login');
    }

    open() {
        super.open('');
    }

    signIn(userName, password) {
        this.signInBtn.click();
        this.emailField.type(userName);
        this.passwordField.type(password);
        this.loginButton.click();
        cy.url().should('eq', 'https://qauto.forstudy.space/panel/garage');
    }

}

export default new LoginPage();