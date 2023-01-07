Feature('Liking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restaurant', ({ I }) => {
  // I.seeElement('#query');
  I.dontSeeElement('.card-items');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.dontSeeElement('.card-items');

  I.amOnPage('/');

  I.seeElement('.card-items-button a');
  const firstRestaurant = locate('.card-items-button a').first();
  I.click(firstRestaurant);

  // I.click(locate('.card-items-button a').first());

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.card-items');
});
