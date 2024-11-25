const assert = require('assert');

Feature('Giving Unlike Restaurants');

Before(({ I }) => {
    I.amOnPage('/#/favorite');
});

Scenario('give unlike to a restaurant', async ({ I }) => {
    I.amOnPage('/');

    I.waitForElement('.restaurant__name a', 10);

    const firstResto = locate('.restaurant__name a').first();
    const firstRestoName = await I.grabTextFrom(firstResto);
    I.click(firstResto);

    I.seeElement('#favouriteButton');
    I.click('#favouriteButton');

    I.amOnPage('/#/favorite');
    I.seeElement('.item-resto'); 
    const favoritedRestoName = await I.grabTextFrom('.restaurant__name');

    assert.strictEqual(firstRestoName, favoritedRestoName);

    I.click(firstResto);

    I.seeElement('#favouriteButton');
    I.click('#favouriteButton');

    I.amOnPage('/#/favorite');

    I.waitForText('Daftar Restoran Tidak Ditemukan',10);
});