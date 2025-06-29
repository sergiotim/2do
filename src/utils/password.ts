import bcrypt from "bcrypt"

const SALT_ROUNDS = 10

export async function saltAndHashPassword(password:any) : Promise<string>{
    return await bcrypt.hash(password,SALT_ROUNDS)
    
}