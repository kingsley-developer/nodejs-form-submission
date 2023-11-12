import express, {Express, Request, Response} from "express"
import { add_Data_DB, update_Data_DB } from "./db_connect";
import cors from "cors"
import * as dotenv from 'dotenv'
import { check, validationResult } from "express-validator"
import { get_All_User, get_User, delete_Users, delete_User} from "./middleware";
import moment from "moment";

const app: Express = express()
const date = moment()

dotenv.config()
app.use(cors({methods: ['GET', 'PUT', 'POST', 'DELETE']}))
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use("/get_users", get_All_User)
app.use("/get_user/query?", get_User)
app.use("/delete_users", delete_Users)
app.delete("/delete_user/query?", delete_User)
app.use("/submit_data",  [check("firstname").notEmpty().withMessage("Firstname cannot be empty"),
                           check("lastname").notEmpty().withMessage("Lastname cannot be empty"),
                           check("age").notEmpty().withMessage("Age cannot be empty"),
                           check("password").notEmpty().withMessage("Password cannot be empty"),
                           check("country").notEmpty().withMessage("Country cannot be empty"),
                           check("alive").notEmpty().withMessage("Alive cannot be empty"),
                           check("occupation").notEmpty().withMessage("Occupation cannot be empty")]
                           )

app.use("/update_data",  [check("firstname").notEmpty().withMessage("Firstname cannot be empty"),
                           check("lastname").notEmpty().withMessage("Lastname cannot be empty"),
                           check("age").notEmpty().withMessage("Age cannot be empty"),
                           check("password").notEmpty().withMessage("Password cannot be empty"),
                           check("country").notEmpty().withMessage("Country cannot be empty"),
                           check("alive").notEmpty().withMessage("Alive cannot be empty"),
                           check("occupation").notEmpty().withMessage("Occupation cannot be empty"),
                           check("beforefirstname").notEmpty().withMessage("beforefirstname cannot be empty"),
                           check("beforelastname").notEmpty().withMessage("beforelastname cannot be empty")
                        ]
                           )                           
let {PORT} = process.env;
let portnumber: number = Number(PORT);

export default function Server(){
    app.get("/get_users", (req: Request, res: Response)=>{})
    app.get("/get_user/query?", (req: Request, res: Response)=>{})
    app.delete("/delete_users", (req: Request, res: Response)=>{})
    app.delete("/delete_user/query?", (req: Request, res: Response)=>{})

    app.put("/update_data/query?", async(req: Request, res: Response)=>{
        async function add_data_middleware(){
   
            let {firstname, lastname, age, password,country, alive, occupation, beforefirstname,  beforelastname} = req.query;
            
            const err = validationResult(req)
       
            if(!err.isEmpty()){
                return res.status(404).json({sentDate: date.calendar(), msg: err.array()}) 
            }
       
            firstname = String(firstname)
            lastname = String(lastname)
            let user_age = Number(age)
            password = String(password)
            country = String(country)
            alive = String(alive)
            occupation = String(occupation)
            beforefirstname = String( beforefirstname)
            beforelastname = String(beforelastname)
       
            await update_Data_DB(firstname,lastname,user_age,password,country,alive,occupation,  beforefirstname, beforelastname)
            res.status(200).json({sentDate: date.calendar(), msg: "Account updated"})
        }
        await add_data_middleware()
   })

    app.post("/submit_data", async(req: Request, res: Response)=>{
         async function add_data_middleware(){
    
             let {firstname, lastname, age, password,country, alive, occupation} = req.body;
        
             const err = validationResult(req)
        
             if(!err.isEmpty()){
                 return res.status(404).json({sentDate: date.calendar(), msg: err.array()}) 
             }
        
             firstname = String(firstname)
             lastname = String(lastname)
             age = Number(age)
             password = String(password)
             country = String(country)
             let user_alive: boolean = Boolean(alive)
             occupation = String(occupation)
        
             const response = await add_Data_DB(firstname,lastname,age,password,country, user_alive,occupation)
             if(response){
                return res.status(201).json({sentDate: date.calendar(), msg: "Account created"})   
             }
             res.status(404).json({sentDate: date.calendar(), msg: "Account creation failed"})
         }
         await add_data_middleware()
    })
    app.all("*",(req: Request, res: Response)=>{
        res.status(404).send("<h1>Page not found</h1>")
    })
    app.listen(portnumber, ()=> console.log(`Server listening on port: ${portnumber}`))
}    

