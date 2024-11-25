const assert = require('assert');

Feature('Review Restaurant');

Before(({ I }) => {
    I.amOnPage('/');
});

Scenario('showing a review', ({ I }) => {
    
    I.waitForElement('.restaurant__name a', 10);

    I.click(locate('.restaurant__name a').first());

    I.seeElement('#reviewPost');
});

Scenario('failed to add a review incomplete input fields', async ({ I }) => {
    I.waitForElement('.restaurant__name a', 8);

    I.click(locate('.restaurant__name a').first());

    I.waitForElement('#inputName', 10);
    I.waitForElement('#inputReview',10);

    const reviewText = 'abcd';

    I.fillField('#inputReview', reviewText);

    I.seeElement('#submitReview[disabled]');

});
Scenario('failed to add a review not enough characters input fields', async ({ I }) => {
    I.waitForElement('.restaurant__name a', 8);

    I.click(locate('.restaurant__name a').first());

    I.waitForElement('#inputName', 10);
    I.waitForElement('#inputReview',10);

    const nameReview = 'ab';
    const reviewText = 'abcd';

    I.fillField('#inputName', nameReview);
    I.fillField('#inputReview', reviewText);

    I.seeElement('#submitReview');
    I.click('#submitReview');
    
    I.dontSee("ab", ".review__sender");
    I.dontSee("abcd", ".review__text");
    I.clearField('#inputName');
    I.clearField('#inputReview');
});

Scenario('add a review', async ({ I }) => {
    I.waitForElement('.restaurant__name a', 8);

    I.click(locate('.restaurant__name a').first());

    I.waitForElement('#inputName', 10);
    I.waitForElement('#inputReview',10);

    const nameReview = 'Ahmad Putra Waluyo';
    const reviewText = 'Tempat sangat nyaman dan cukup luas meski pelayan kurang ramah.';

    I.fillField('#inputName', nameReview);
    I.fillField('#inputReview', reviewText);

    I.seeElement('#submitReview');
    I.click('#submitReview');


    I.waitForElement('.review__card',10);

    const latestName = await I.grabTextFrom(locate('.review__card .review__sender span').last());
    const latestReview = await I.grabTextFrom(locate('.review__card .review__text').last());

    assert.strictEqual(nameReview,latestName);
    assert.strictEqual(reviewText,latestReview);

});