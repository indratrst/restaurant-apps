const assert = require('assert');

Feature('Unliking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('Unliking one restaurant', async ({ I }) => {
  I.dontSeeElement('.card-items');

  I.amOnPage('/');

  I.seeElement('.card-items-button a');
  const firstRestaurant = locate('.card-items-button a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  // I.click(locate('.card-items-button a').first());

  // pause();
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.card-items');
  const likedRestaurantTitle = await I.grabTextFrom('.card-items-button');
  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);

  I.seeElement('.card-items');

  I.seeElement('.card-items-button a');
  I.click(locate('.card-items-button a').first());

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restaurant', ({ I }) => {
  // I.seeElement('#query');
  I.dontSeeElement('.card-items');
});
