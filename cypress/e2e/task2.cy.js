/// <reference types="cypress" />

import ProfilePage from "./page-objects/ProfilePage";
import profileInfo from "../fixtures/profileInfo.json";

describe('Profile tests', () => {

    it("Test 1 - Mock the profile data", () => {
        cy.intercept('GET', 'https://qauto.forstudy.space/api/users/profile', profileInfo).as('profile');
        ProfilePage.open();
        console.log('@profile');
        cy.wait('@profile').its('response.body.data.name').should('eq', 'Polar');
        cy.get('@profile').its('response.body.data.lastName').should('eq', 'Bear');
        cy.get('@profile').its('response.body.data.dateBirth').should('contain', '2011-11-11');
        cy.get('@profile').its('response.body.data.country').should('eq', 'USA');
        ProfilePage.profileName.should('have.text', 'Polar Bear');
        ProfilePage.profileCountry.should('have.text', 'USA');
        ProfilePage.profileBirthday.should('contain', '11.11.2011');
    })
})