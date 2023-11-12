import {Request, Response} from "express"
import moment from "moment";
import { get_All_User as getUsersTotal, 
        get_Specific_User,
        delete_All_User,
        delete_Specific_User} from "./db_connect";


export async function get_All_User (req: Request, res: Response, next: any) {
    let users =  await getUsersTotal()
    res.status(200).json(users)
    next()
}

export async function get_User (req: Request, res: Response, next: any) {
    let {firstname, lastname, age} = req.query
    firstname = String(firstname)
    lastname = String(lastname)
    let user_age: number = Number(age)
    let user = await get_Specific_User(firstname, lastname, user_age)
    res.status(200).json(user)
    next()
}

export async function delete_Users (req: Request, res: Response, next: any) {
    let date = moment()
    await delete_All_User()
    res.status(200).json({time: date.calendar(), msg:"All users deleted"})
    next()
}

export async function delete_User (req: Request, res: Response, next: any){
    let {firstname, lastname, age} = req.query
    console.log(firstname, lastname, age)
    firstname = String(firstname)
    lastname = String(lastname)
    let user_age: number = Number(age)
    let date = moment()
    await delete_Specific_User(firstname, lastname, user_age)
    res.status(200).json({time: date.calendar(), msg:"User deleted"})
    next()
}