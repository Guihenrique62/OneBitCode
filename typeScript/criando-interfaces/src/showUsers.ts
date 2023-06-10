import { DataUser } from "./interfaces";

export async function showUsers(listOfUsers:object[]) {
   listOfUsers.forEach((user:DataUser)=>{
      console.log(user)
   })
}