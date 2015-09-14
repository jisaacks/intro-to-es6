let myObj = {
  
  setTitle(title) {
    this._title = title;
  },
  
  getTitle() {
    return this._title;
  }
};

myObj.setTitle('Sweet!');

console.log( 'Concise methods are:', myObj.getTitle() );
