import { BasePage } from "./basePage.page";

export const SELECTORS = {
    windowBasket: '[class="cart-product__title"]',
    deleteBTN: '#cartProductActions0',
    price: '.product-price__big-color-red',
    basketPrice: '[class="cart-receipt__sum-price"]',
    textBasket: '[class="cart-dummy__heading"]',
    phone: '[class="goods-tile__inner"]',
    phonePrice: '[class="goods-tile__price-value"]',
    text: '[class="content content_type_catalog"]'
}
export class ElectronicsPage extends BasePage {
    clickPhoneCategory() {
        this.getElement('[class="tile-cats"]').eq(0).click()
    }

    clickIPhone() {
        this.getElement('[data-goods-id="395460480"]').click()
    }

    clickBuyBTN() {
        this.getElement('[class="product-button__buy ng-star-inserted"]').click()
    }

    clickCloseBTN() {
        this.getElement('[class="modal__close"]').click()
    }

    clickTVsCategory() {
        this.getElement('[class="tile-cats"]').eq(1).click()
    }

    clickTV() {
        this.getElement('[data-goods-id="373026732"]').click()
    }

    clickMenuDeleteBTN() {
        this.getElement(SELECTORS.deleteBTN).click()
    }

    clickDeleteBTN() {
        this.getElement('[class="button button--medium button--with-icon button--link"]').click()
    }

    getPrice() {
        return this.getElement(SELECTORS.price)
    }

    getBasketPrice() {
        return this.getElement(SELECTORS.basketPrice)
    }

    clickPrice() {
        this.getElement('[data-filter-name="price"]').click({force: true})
    }

    addedPriceFilter(minPrice, maxPrice) {
        this.getElement('[class="slider-filter__inner"]').parent().within(() => {
            this.getElement('[formcontrolname="min"]').clear().type(minPrice)
            this.getElement('[formcontrolname="max"]').clear().type(maxPrice)
            this.getElement('[class="button button_color_gray button_size_small slider-filter__button"]').click()
        })
    }

    clickOnSearch() {
        this.getElement('[class="search-form__inner"').type('$#qwerty')
    }

    clickFindBTN() {
        this.getElement('[class="button button_color_green button_size_medium search-form__submit"]').click()
    }
}