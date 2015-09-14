
function getAddress() {
  return {
    street: '115 M.L.K.',
    city:   'Atlanta',
    state:  'GA',
    zip:    '30303'
  };
}

let {street, city, state} = getAddress();

console.log(street, city, state);
