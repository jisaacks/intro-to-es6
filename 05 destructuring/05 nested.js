function account() {
  return {
    name: 'John Doe',
    phone: '555.555.1234',
    address: {
      street: '511 Beach St.',
      city: 'Fort Worth',
      state: 'TX'
    }
  }
}

let {address: {street}} = account();

console.log(street);

