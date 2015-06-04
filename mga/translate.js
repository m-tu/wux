console.log('asd');


console.log('asd', $('#content').html().length);


var contentAsTxt = $('#content').text();
//console.log('text', contentAsTxt);


var lol = "“万兄弟，想不到你已成为听风   宗的核心弟子，当   真是我紫金　城小辈中的第一人啊。”　";
console.log('original: ', lol);
lol = lol.replace(/[“” \u3000]/g, '');
console.log('remove: ', lol);


//contentAsTxt.replace(/[“” ]/g, '');


//getKanjiCounts(contentAsTxt);


function getKanjiCounts(text) {

  var pureText = text.replace(/[“”!?, \t]/g, '');

  console.log(': ', pureText);
  console.log('pureLen: ', pureText.length);

}