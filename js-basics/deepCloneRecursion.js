const deepCloneRecursion = (item) => {
    if (item === null || typeof item != 'object') {
        return item
    }
    const initialValues = Array.isArray(item) ? [] : {}
    return Object.keys(item).reduce((i, key) => {
        i[key] = deepCloneRecursion(item[key])
        return i
    }, initialValues)
}

let TempObj = {
    name: 'rajesh',
    age: 26,
    role: 'developer',
    skills: ['reactjs', 'nodejs', 'javascript', 'python', 'express'],
    technologies: {
        frontend: {
            lang: 'javascript',
            frameworks: ['nextjs', 'angular']
        },
        backend: {
            lang: 'nodejs',
            frameworks: ['express', 'nodejs']
        }
    }
}

let clonedObj = deepCloneRecursion(TempObj)
clonedObj['technologies']['frontend']['frameworks'] = 'nextjs'
console.log('temp object ', TempObj);
console.log('cloned obj ', clonedObj);