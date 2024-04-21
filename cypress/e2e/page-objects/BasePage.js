/// <reference types="cypress" />

export default class BasePage {
    constructor() {
        this.baseUrl = 'https://qauto.forstudy.space';
    }

    open(url) {
        cy.visit(`${this.baseUrl}${url}`, {
            auth: {
                username: 'guest',
                password: 'welcome2qauto',
            }, failOnStatusCode: false
        });
    }

}