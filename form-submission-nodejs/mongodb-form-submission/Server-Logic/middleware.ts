import {Request, Response} from "express"
import moment from "moment";
import { get_All_User as getUsersTotal, 
        get_Specific_User,
        delete_All_User,
        delete_Specific_User} from "./db_connect";


export async function get_All_User (_req: Request, res: Response, next: any) {
    let users =  await getUsersTotal()
    if(users){
        return res.status(200).json(users)    
    }
    res.status(404).json({date:moment().calendar(), err:"Cant find users"})
    next()
}

export async function get_User (req: Request, res: Response, next: any) {
    let {id} = req.query
    id = String(id)
    const date = moment().calendar()
    let user = await get_Specific_User(id)
    if(user){
        return res.status(200).json(user)
    }
    res.status(404).json({date, err:"Cant find user"})
    next()
}


export async function delete_Users (_req: Request, res: Response, next: any) {
    let date = moment()
    let status: boolean = await delete_All_User()
    if(status){
       return res.status(200).json({time: date.calendar(), msg:"All users deleted"})
    }
    res.status(200).json({time: date.calendar(), msg:"Error users not deleted"})
    next()
}

export async function delete_User (req: Request, res: Response, next: any){
    let {id} = req.query
    id = String(id)
    let date = moment()
    let status: boolean = await delete_Specific_User(id)
    if(status) {
        return res.status(200).json({time: date.calendar(), msg:"User deleted"})
    }
    res.status(404).json({time: date.calendar(), msg:"User was not deleted"})
    next()
}