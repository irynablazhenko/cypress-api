/// <reference types="cypress" />

import GaragePage from "./page-objects/GaragePage";
import profileInfo from "../fixtures/profileInfo.json";

describe('Profile tests', () => {

    let userData;

    beforeEach(() => {
        GaragePage.open();
    })

    it("Test 1 - Mock the profile data", () => {
        cy.intercept('GET', 'https://qauto.forstudy.space/api/users/profile', profileInfo).as('profile');
        GaragePage.clickProfileMenu();
        console.log('@profile');
        cy.wait('@profile').its('response.body.data.name').should('eq', 'Polar');
        cy.get('@profile').its('response.body.data.lastName').should('eq', 'Bear');
        cy.get('@profile').its('response.body.data.dateBirth').should('contain', '2011-11-11');
    })
})