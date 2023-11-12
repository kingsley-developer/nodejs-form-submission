import mysql2 from "mysql2/promise"
import {encrypt_password} from "./utils"


export async function add_Data_DB(firstName: string, 
                          lastName: string,
                          age: number,
                          password: string,
                          country: string,
                          alive: string,
                          occupation: string
                          ){
    
    password = await encrypt_password(password)

    const conn = mysql2.createConnection(
        {
            host:'localhost', 
            user: 'root',
            database: 'kingdb',
            rowsAsArray: true,
            port: 3306,
            password: "football"
        }
            )
    await (await conn).execute(`insert into kingdb_table(first_name, last_name, user_age, user_password, user_country, user_alive, user_occupation)
                                                    values(?,?,?,?,?,?,?)`,
                                                    [firstName,lastName,age,password,country,alive,occupation]); 
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
    const conn = mysql2.createConnection(
                                    {
                                        host:'localhost', 
                                        user: 'root',
                                        database: 'kingdb',
                                        rowsAsArray: true,
                                        port: 3306,
                                        password: "football"
                                    }
                                        )
    await (await conn).execute(`update kingdb_table set first_name=?, last_name=?, user_age=?, user_password=?, user_country=?, user_alive=?, user_occupation=?
                                                     where first_name=? and last_name=?`,
                                                     [firstName,lastName,age,password,country,alive,occupation,beforefirstName,beforelastName]);
}

export async function get_All_User(){
    const conn = mysql2.createConnection(
        {
            host:'localhost', 
            user: 'root',
            database: 'kingdb',
            rowsAsArray: true,
            port: 3306,
            password: "football"
        }
            )
    const [rows] = await (await conn).execute("SELECT * from kingdb_table");
    return rows
}

export async function get_Specific_User(firstName: string, lastName: string, age: number){
    
    const conn = mysql2.createConnection(
        {
            host:'localhost', 
            user: 'root',
            database: 'kingdb',
            rowsAsArray: true,
            port: 3306,
            password: "football"
        }
            )
    const [rows] = await (await conn).execute(`SELECT * from kingdb_table where first_name=? and last_name=? and user_age =?`, [firstName, lastName, age])
    return rows
}

export async function delete_All_User(){
    const conn = mysql2.createConnection(
        {
            host:'localhost', 
            user: 'root',
            database: 'kingdb',
            rowsAsArray: true,
            port: 3306,
            password: "football"
        }
            )
    await (await conn).execute("delete from kingdb_table");
}

export async function delete_Specific_User(firstName: string, lastName: string, age: number){
    const conn = mysql2.createConnection(
        {
            host:'localhost', 
            user: 'root',
            port: 3306,
            password: "football",
            database: 'kingdb',
            rowsAsArray: true
        }
            )
    await (await conn).execute(`delete from kingdb_table where first_name=? and last_name=? and user_age =?`, [firstName, lastName, age]);
}