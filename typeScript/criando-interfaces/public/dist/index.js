import { allUsers, getUsers } from "./src/getUsers.js";
import { mostReposUser } from "./src/mostReposUser.js";
import { showRepos } from "./src/showRepos.js";
import { sumRepos } from "./src/sumRepos.js";
async function show() {
    await getUsers('fillypecunha');
    await getUsers('guihenrique62');
    await getUsers('felipefdl');
    showRepos(allUsers[0]);
    sumRepos(allUsers);
    mostReposUser(allUsers);
}
show();
