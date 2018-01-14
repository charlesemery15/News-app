function test_one(){
  var article = new Article('Headline', 'url', 'text');
  assert.isTrue(article.headline === 'Headline', "Article should display headline ");
};

test_one();

function test_two(){
  var article = new Article('Headline', 'url', 'text');
  assert.isTrue(article.url === 'url', "Article should display url ")
}

test_two();

function test_three(){
  var article = new Article('Headline', 'url', 'text');
  assert.isTrue(article.text === 'text', "Article should display text ")
}

test_three();
