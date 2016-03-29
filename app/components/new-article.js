import Ember from 'ember';

export default Ember.Component.extend({
  addNewArticle: false,
  actions: {
  articleFormShow() {
    this.set('addNewArticle', true);
  },

  save1() {
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        section: this.get('section'),
        image: this.get('image'),
        body: this.get('body'),
      };
      this.set('addNewArticle', false);
      this.sendAction('save2', params);
    }
  }
});
