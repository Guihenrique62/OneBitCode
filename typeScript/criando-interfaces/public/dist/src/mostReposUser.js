export function mostReposUser(allUsers) {
    allUsers.sort((a, b) => b.public_repos - a.public_repos);
    const topFive = allUsers.slice(0, 5);
    topFive.forEach((user) => {
        console.log(user.name, user.public_repos);
    });
}
