import { DataRepos, DataUser } from "./interfaces.js";
import { showRepos } from "./showRepos.js";

export function sumRepos(users:object[]){
   let sumOfRepos:number = 0
   users.forEach( async (user:DataUser)=>{
      const repos = await showRepos(user)
      sumOfRepos += repos.length
      console.log(sumOfRepos)
   })
}