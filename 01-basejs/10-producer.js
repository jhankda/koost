import { createClient } from "redis";
import {v4 as uuidv4} from "uuid";

const client  = createClient()

const pendingOperation = new Map()


client.connect()

export  function addOperationinQ(userId, Action, Model, body){
    
    
    const operationId  = uuidv4()
    const objectData  = {Action, Model, body, userId, operationId}
    const data = JSON.stringify(objectData)
    console.log("1")
    
    client.lPush('Submissions', data);
    console.log("error no buddy")
    return new Promise((resolve, reject)=> {
        pendingOperation.set(operationId, {resolve, reject})
    })

}

export async function handleResponse(){
    console.log("sampoooo hahahah")
    await client.brPop('Results', 0).then((data)=> {
        console.log("halooooooooo")
        
        try{
            console.log("value of data",data)
            console.log(typeof data)

            const response = data.element
            const parseddata = JSON.parse(response)

            console.log(typeof parseddata)
            

            const { result , error } = parseddata
            const operationId = parseddata.operationId

            console.log("operationId",operationId)
            console.log("result",result)


            if(pendingOperation.has(operationId)){
                console.log("inside if and OPERATION ID IS ", operationId)
                const{ resolve,reject} = pendingOperation.get(operationId)
                if(error){
                    reject(error)
                }
                else{
                    resolve(result)
                }
                pendingOperation.delete(operationId)
            }
            handleResponse()
        }
        catch(err){
            console.log("Error occured while parsing data",err)
        }})
    
    console.log("1")
}




// process.on('SIGTERM', async () => {
//     redisClient.quit();
//     console.log('Gracefully shut down');
//     process.exit(0);
//   });

