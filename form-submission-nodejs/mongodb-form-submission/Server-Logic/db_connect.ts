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
                            previous_id: string
                            ){ 
                                try{
                                    password = await encrypt_password(password) 
                                    mongoose.connect("mongodb://127.0.0.1:27017/empire", (err:any)=>{
                                        if(err) console.log(err)
                                        else console.log("Connected")
                                    })
                                    await Customers.findByIdAndUpdate(previous_id, {
                                        firstName,
                                        lastName,
                                        age,
                                        password,
                                        country,
                                        alive,
                                        occupation
                                                                                    })
                                return true
                                }
                                catch(e: any){
                                    console.log("Failed to connect ",e.message)
                                    return false
                                }                            
}

export async function get_All_User(){
    mongoose.connect("mongodb://127.0.0.1:27017/empire", (err:any)=>{
        if(err) console.log(err)
        else console.log("Connected")
    })
    try{
        const users = await Customers.find({})
        console.log(users)
        return users
    }
    catch(e:any){
        console.log(e.message)
    }
}

export async function get_Specific_User(user_id:string){
    mongoose.connect("mongodb://127.0.0.1:27017/empire", (err:any)=>{
        if(err) console.log(err)
        else console.log("Connected")
    })
    try{
        const user = await Customers.findById(user_id)
        console.log(user)
        return user
    }
    catch(e:any){
        console.log(e.message)
        return false
    }
}

export async function delete_All_User(){
    mongoose.connect("mongodb://127.0.0.1:27017/empire", (err:any)=>{
        if(err) console.log(err)
        else console.log("Connected")
    })
    try{
        await Customers.deleteMany({})
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