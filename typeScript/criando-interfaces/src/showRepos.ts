import { DataRepos, DataUser } from "./interfaces"


export async function showRepos(user:DataUser){
   try {
      const response = await fetch(user.repos_url)
      if(response.ok){
         const listOfRepos = await response.json()
         return listOfRepos
      }else{
         throw new Error('Usuário Não posssui repositórios!')
      }
   } catch (error) {
      console.log(error)
   }
}