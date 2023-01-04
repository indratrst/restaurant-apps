const assert = require('assert');
Feature('Liking Restaurant');
 
Before(({ I }) => {
  I.amOnPage('/#/favorite');
});
 
Scenario('showing empty liked restaurant', ({ I }) => {
  // I.seeElement('#query');
  I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant-item__not__found');
});


Scenario('liking one restaurant', async ({ I }) => {
  I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant-item__not__found');
 
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

  
});


Scenario('Unliking one restaurant', async ({ I }) => {
  I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant-item__not__found');
 
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
  pause();
  I.seeElement('.card-items');
  
  I.seeElement('.card-items-button a');
  I.click(locate('.card-items-button a').first());

  
  
  I.seeElement('#likeButton');
  I.click('#likeButton');

    I.amOnPage('/#/favorite');

  
});
