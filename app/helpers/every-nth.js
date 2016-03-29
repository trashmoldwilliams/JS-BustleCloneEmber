import Ember from 'ember';

export function everyNth(params/*, hash*/) {
  var model = params[0];
  var articles = model.get('content');
  console.log(articles);
  var startRow = Ember.String.htmlSafe('<div class"row">');
  var startCol = Ember.String.htmlSafe('<div class"col-sm-4">');
  var endDiv = Ember.String.htmlSafe('</div>');
  ret = "";
  for (var i = 0; i < articles.length; i++) {
    if(i === 0) {
      ret += startRow;
    }

    ret += startCol;
    ret += articles[i]._data.section + "<br> <img src='" + articles[i]._data.image + "' alt='" + articles[i]._data.title + "'><br> <h3>" + articles[i]._data.title + "</h3>" + articles[i]._data.author + "<br>";
    console.log(articles[i]._data.author);
  }

}

export default Ember.Helper.helper(everyNth);
