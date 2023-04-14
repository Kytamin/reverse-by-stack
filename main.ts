import {Stack} from "./Stack";


let numbers:number[]=[0,1,2,3,4,5,6,7,8,9,10]
let stack= new Stack()
function reverse(Array) {

    for (let i = 0; i < numbers.length ;i++) {
        stack.push(numbers[i])
    }

    for (let i = 0; i < Array.length; i++) {
        Array[i] = stack.pop()

    }
    return Array
}
console.log(reverse(numbers))