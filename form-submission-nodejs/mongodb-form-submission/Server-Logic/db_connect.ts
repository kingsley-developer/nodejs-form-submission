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
    mongoose.connect("mongodb://localhost:27017/empire")
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
catch(e){
    console.log(e)
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

export async function get_Specific_User(firstName: string, lastName: string, age: number){
    
}

export async function delete_All_User(){
}

export async function delete_Specific_User(firstName: string, lastName: string, age: number){
}