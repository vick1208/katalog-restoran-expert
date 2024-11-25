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

Scenario('searching not existed restaurant', async ({ I }) => {
    I.see('Daftar Restoran Tidak Ditemukan', '.restaurant-item__not__found');

    I.amOnPage('/');

    I.waitForElement('.restaurant__name a',10);

    const restoTitles = [];

    for(let i = 1; i <= 3; i++){
        I.click(locate('.restaurant__name a').at(i));
        I.seeElement('#favouriteButton');
        I.click('#favouriteButton');
        restoTitles.push(await I.grabTextFrom('.detail__title'));
        I.amOnPage('/');
    }

    I.amOnPage('/#/favorite');
    I.seeElement('#queryResto');

    I.fillField('#queryResto','tidak ada restaurant');
    I.pressKey('Enter');

    I.see('Daftar Restoran Tidak Ditemukan', '.restaurant-item__not__found');
});