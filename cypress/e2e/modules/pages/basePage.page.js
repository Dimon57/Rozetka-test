export class BasePage {

    goto(page) {
        cy.visit('https://rozetka.com.ua/' + page)
    }
    getElement(element) {
        return cy.get(element)
    }
}