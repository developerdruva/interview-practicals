console.log('this outer ', this);
const name = 'rajesh'

const obj = {
    name: 'rks',
    role: 'software'
}
console.log('this outer ', this.name);

function myfun() {
    let myname = 'kumar'
    console.log('this inside my fun', this.myname)
}
myfun()

const myfuntionc = () => {
    console.log('inside arrow funtion ', this.name);
}
myfuntionc()