import { ElectronicsPage, SELECTORS } from "../../modules/pages/electronicsPage"

const electronics = new ElectronicsPage

describe('', () => {

    beforeEach('', () => {
        electronics.goto('t/')
    })

    it('The phone has been added to the cart', () => {
        electronics.clickPhoneCategory()
        electronics.clickIPhone()
        electronics.clickBuyBTN()

        electronics.getElement(SELECTORS.windowBasket).should('have.text', 'Мобільний телефон Apple iPhone 13 128GB Midnight (MLPF3HU/A)')
    })

    it('The TV has been added to the cart', () => {
        electronics.clickTVsCategory()
        electronics.clickTV()
        electronics.clickBuyBTN()

        electronics.getElement(SELECTORS.windowBasket).should('have.text', 'Телевізор LG 43UQ75006LF')
    })

    it('Item removed from cart', () => {
        electronics.clickPhoneCategory()
        electronics.clickIPhone()
        electronics.clickBuyBTN()

        electronics.clickMenuDeleteBTN()
        electronics.clickDeleteBTN()

        electronics.getElement(SELECTORS.textBasket).should('have.text', 'Кошик порожній')
    })

    it('Check the price on the website and in the basket', () => {
        electronics.clickPhoneCategory()
        electronics.clickIPhone()
        electronics.clickBuyBTN()

        electronics.getPrice().then((price) => {
            electronics.getBasketPrice().then((basketPrice) => {
                expect(price.text()).to.eq(basketPrice.text())
            })
        })
    })

    it('Filtered price', () => {
        const minPrice = 20000
        const maxPrice = 30000
        electronics.clickPhoneCategory()
        electronics.clickFilter()
        electronics.clickPrice()
        electronics.addedPriceFilter(minPrice, maxPrice)
        electronics.clickShowBTN()
        cy.wait(5000)
        electronics.getElement(SELECTORS.phone).each((phone) => {
            electronics.getElement(phone).within(() => {
                electronics.getElement(SELECTORS.phonePrice).invoke('text').then((text) => {
                    const price = parseInt(text.replace(/\D/g, ''))
                    expect(parseInt(price)).to.be.within(minPrice, maxPrice)
                })
            })
        })
    })

    it('Search for a non-existent object', () => {
        electronics.clickOnSearch()
        electronics.clickFindBTN()

        electronics.getElement(SELECTORS.text).should('have.text', 'За заданими параметрами не знайдено жодної моделі')
    })
})