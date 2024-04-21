/// <reference types="cypress" />
import 'cypress-plugin-api'

describe('API tests', () => {

    it("Test 1 - Check list of albums", () => {
        cy.request('GET', 'https://jsonplaceholder.typicode.com/photos').then(response => {
            expect(response.status).to.eq(200);
            expect(response.body.length).to.be.greaterThan(0);
            expect(response.body[5].title).to.eq('accusamus ea aliquid et amet sequi nemo');
        });
    })

    it("Test 2 - Create a new post", () => {
        let post = {
            title: 'post title',
            body: 'post body',
            userId: 1,
        }
        cy.request('POST', 'https://jsonplaceholder.typicode.com/posts', post).as('post');
        cy.get('@post').its('body.title').should('eq', 'post title');
        cy.get('@post').its('body.body').should('eq', 'post body');
        cy.get('@post').its('body.id').should('eq', 101);
    })

    it("Test 3 - Update full fields in post", () => {
        let newPost = {
            title: 'new title',
            body: 'new body',
            userId: 22,
        }
        cy.request('PUT', 'https://jsonplaceholder.typicode.com/posts/5', newPost).as('newPost');
        cy.get('@newPost').its('body.title').should('eq', 'new title');
        cy.get('@newPost').its('body.body').should('eq', 'new body');
        cy.get('@newPost').its('body.userId').should('eq', 22);
        cy.get('@newPost').its('body.id').should('eq', 5);
    })

    it("Test 3 - Update full fields in post", () => {
        let newPost = {
            title: 'new title',
            body: 'new body',
            userId: 22,
        };
        cy.request('PUT', 'https://jsonplaceholder.typicode.com/posts/5', newPost).as('newPost');
        cy.get('@newPost').its('body.title').should('eq', 'new title');
        cy.get('@newPost').its('body.body').should('eq', 'new body');
        cy.get('@newPost').its('body.userId').should('eq', 22);
        cy.get('@newPost').its('body.id').should('eq', 5);
    })

    it("Test 4 - Partial updating post", () => {
        cy.api('PATCH', 'https://jsonplaceholder.typicode.com/posts/3', { body: 'new body' }).its('body.body').should('eq', 'new body');
    })

    it("Test 5 - Delete post", () => {
        cy.api('DELETE', 'https://jsonplaceholder.typicode.com/posts/5').its('status').should('eq', 200);
    })

})