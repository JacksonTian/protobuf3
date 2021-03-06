'use strict';

const Tag = require('./tag');
const Token = require('./token');

var TagTip = {};

Object.keys(Tag).forEach((key) => {
  var value = Tag[key];
  TagTip[value] = key;
});

class Word extends Token {
  constructor(lexeme, tag) {
    super(tag);
    this.lexeme = lexeme;
  }

  toString() {
    return `word: ${this.lexeme} tag: ${TagTip[this.tag]}`;
  }
}

Word.True = new Word('true', Tag.BOOL);
Word.False = new Word('false', Tag.BOOL);

module.exports = Word;
