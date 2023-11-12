import bcrypt from "bcrypt"

const saltRounds:number = 10;

export async function encrypt_password(password: string){
    let data =  await bcrypt.hash(password, saltRounds);
    return data
}

export async function decrypt_password(password: string, hash:string){
    let result = await bcrypt.compare(password, hash)
    if(result == false){
        return false
    }
    return password
}
