import { showRepos } from "./showRepos.js";
export function sumRepos(users) {
    let sumOfRepos = 0;
    users.forEach(async (user) => {
        const repos = await showRepos(user);
        sumOfRepos += repos.length;
        console.log(sumOfRepos);
    });
}
