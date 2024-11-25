const assert = require('assert');

Feature('Giving Like Restaurants');

Before(({ I }) => {
    I.amOnPage('/#/favorite');
}); 

Scenario('showing empty saved favorite restaurants',  ({ I }) => {
    I.seeElement('#queryResto');
    I.see('Daftar Restoran Tidak Ditemukan.', '.restaurant-item__not__found');
});

Scenario('give a like to a restaurant', async ({ I }) => {
    I.see('Daftar Restoran Tidak Ditemukan', '.restaurant-item__not__found');
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
});
