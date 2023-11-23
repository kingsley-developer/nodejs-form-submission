import {encrypt_password} from "./utils"
import mongoose from "mongoose"
import Customers from "./schema"

export async function add_Data_DB(firstName: string, 
                          lastName: string,
                          age: number,
                          password: string,
                          country: string,
                          alive: boolean,
                          occupation: string
                          ){
    try{
    password = await encrypt_password(password) 
    mongoose.connect("mongodb://127.0.0.1:27017/empire", (err:any)=>{
        if(err) console.log(err)
        else console.log("Connected")
    })
    const user = new Customers({
        firstName,
        lastName,
        age,
        password,
        country,
        alive,
        occupation
})
await user.save()
return true
}
catch(e: any){
    console.log("Failed to connect ",e.message)
    return false
}
}

export async function update_Data_DB(firstName: string, 
                            lastName: string,
                            age: number,
                            password: string,
                            country: string,
                            alive: string,
                            occupation: string,
                            beforefirstName: string,
                            beforelastName: string
                            ){ 
    
    password = await encrypt_password(password)                            
}

export async function get_All_User(){
}

export async function get_Specific_User(user_id:string){
    mongoose.connect("mongodb://127.0.0.1:27017/empire", (err:any)=>{
        if(err) console.log(err)
        else console.log("Connected")
    })
    try{
        const user = await Customers.findById(user_id)
        return user
    }
    catch(e:any){
        console.log(e.message)
    }
}

export async function delete_All_User(){
    mongoose.connect("mongodb://127.0.0.1:27017/empire", (err:any)=>{
        if(err) console.log(err)
        else console.log("Connected")
    })
    try{
        
        mongoose.deleteModel("customers")
        return true
    }
    catch(e:any){
        console.log(e.message)
        return false
    }
}

export async function delete_Specific_User(user_id: string){
    mongoose.connect("mongodb://127.0.0.1:27017/empire", (err:any)=>{
        if(err) console.log(err)
        else console.log("Connected")
    })
    try{
        await Customers.findByIdAndDelete(user_id)
        return true
    }
    catch(e:any){
        console.log(e.message)
        return false
    }
}