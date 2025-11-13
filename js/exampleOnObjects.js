let array = [1,2,3]
array = [4,5,6]
var job = new Date()


class exampleClass{
    exampleClass(){
        job= 'software',
        company='bristlecone'
    }
}

console.log(this)
console.log(array)

const obj = {
    name: 'rajesh',
    role: 'developer',
    location: 'vijayawada'
}
obj.location = 'kakinada'
console.log(obj)

const person = {
    name: 'rajesh',
    role: 'developer',
    location: 'vijayawada',
    description: function() {
        console.log(this.name, this.role)
    },
    example: ()=>{
        console.log(this.job)
    }
}
person.description()
person.example()