export class BasePage {

    goto(page) {
        cy.visit('https://www.google.com.ua/' + page)
    }
    getElement(element) {
        return cy.get(element)
    }
}