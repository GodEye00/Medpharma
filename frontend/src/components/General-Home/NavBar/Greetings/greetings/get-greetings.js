import $ from "jquery"

export default function greetFunc () {

     $(function () {

        

        let today= new Date()
        let hourNow = today.getHours()
        let greeting
        if (hourNow > 18) {
        greeting= 'Hello Good evening!'
        }
        else if (hourNow > 12) {
        greeting = 'Hello Good afternoon!'
        }
        else if (hourNow > 0) {
        greeting = 'Hello Good morning!'
        }
        else {
        greeting = 'Welcome! ' 
        }
         
    return greeting
        
    })
}