import { DataUser } from "./interfaces";

export function mostReposUser(allUsers:DataUser[]){

   allUsers.sort((a, b) => b.public_repos - a.public_repos);
   const topFive:DataUser[] = allUsers.slice(0,5)

   topFive.forEach((user)=>{
      console.log(user.name,user.public_repos)

   })
}

