let address = [
  '115 M.L.K.',
  'Atlanta',
  'GA'
];

let addy = {};
addy.reset = function(street, city, state, zip) {
  this.street = street;
  this.city   = city;
  this.state  = state;
  this.zip    = zip;
}

addy.reset(...address);

console.log(addy.city, addy.zip);
