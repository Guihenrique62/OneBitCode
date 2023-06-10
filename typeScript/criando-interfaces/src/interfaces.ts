export interface DataRepos{
   name:string
   description:string
   fork:boolean
   stargazerss_count:number
}

export interface DataUser{
   id:number
   login:string
   name:string
   bio:string
   public_repos:number
   repos_url:string
}