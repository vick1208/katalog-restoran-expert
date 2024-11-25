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

Scenario('searching favorite restaurant', async ({ I }) => {
    I.see('Daftar Restoran Tidak Ditemukan', '.restaurant-item__not__found');
    I.amOnPage('/');

    I.seeElement('.restaurant__name a');

    const titles = [];
    for(let i = 1 ; i <= 3 ; i++){
        I.click(locate('.restaurant__name a').at(i));

        I.seeElement('#favouriteButton');
        I.click('#favouriteButton');

        titles.push(await I.grabTextFrom('.detail__title'));

        I.amOnPage('/');
    }

    I.amOnPage('/#/favorite');
    I.waitForElement('#queryResto', 10);


    const visibleLikedResto = await I.grabNumberOfVisibleElements('.item-resto');
    assert.strictEqual(titles.length, visibleLikedResto);

});
