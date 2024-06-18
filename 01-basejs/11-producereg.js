import { addOperationinQ, handleResponse } from "./10-producer.js"
const Action = "CREATE"
const userId = "User01"
const body  = {
    statusCode:"123456",
    description:"this is a test harsh"

}
const Model =  "OrderStatusCode"

setInterval(() => {   
    addOperationinQ(userId, Action, Model, body).then((result)=> {
        console.log("------------------------")
        console.log("result is here ",result)
    })
    handleResponse()

}, 2000);


// console.log("haloium",haloium)


