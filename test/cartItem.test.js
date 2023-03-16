/**
 * @file      cartCustomCurrency.test.js
 * @brief     This class is designed to test the behaviour of a cartItem.
 * @author    Created by Nicolas.GLASSEY
 * @version   13-02-2022 - original (dedicated to RIA1)
 * @version   @version   03-03-2023 - update for second eval
 */

"use strict";

let CartItem =  require('../CartItem/CartItem.js');
const InvalidArticleIdException = require("../CartItem/InvalidArticleIdException.js");
const InvalidQuantityException = require("../CartItem/InvalidQuantityException.js");
const InvalidPriceException = require("../CartItem/InvalidPriceException.js");
const InvalidCurrencyException = require("../CartItem/InvalidCurrencyException.js");
const InvalidNameException = require("../CartItem/InvalidNameException.js");

test('allGetters_NominalCaseWithDefaultCurrency_Success', () => {
    //given
    let articleId = 1;
    let name = "Iphone 27";
    let quantity = 10;
    let price = 20;
    let currency = "CHF";
    let cartItem = new CartItem(articleId, name, quantity, price);
    let total = 200;

    //when
    //we call the getters directly in assertion below

    //then
    expect(cartItem.articleId).toEqual(articleId);
    expect(cartItem.name).toEqual(name);
    expect(cartItem.quantity).toEqual(quantity);
    expect(cartItem.price).toEqual(price);
    expect(cartItem.currency).toEqual(currency);
    expect(cartItem.total).toEqual(total);
})