const materials = ['Hydrogen', 'Helium', 'Lithium', 'Beryllium'];


let [x , y , ...z] = materials; // rest operator

console.log('-> ', x, y, z)

const myVehicle = {
    brand: 'Ford',
    model: 'Mustang',
    color: 'red'
  }
  
  const updateMyVehicle = {
    type: 'car',
    year: 2021, 
    color: 'yellow'
  }

  console.log({...myVehicle, ...updateMyVehicle}) // spread operator