function Person(fullname, favColor) {
  this.name = fullname;
  this.favoriteColor = favColor;
  this.greet = function() {
    console.log("This is " + this.name + "and my favorite color is " + favColor + ".");
  }
}

module.exports = Person;