export const allUsers = [];
export async function getUsers(userName) {
    try {
        const response = await fetch(`https://api.github.com/users/${userName}`);
        if (response.ok) {
            const user = await response.json();
            allUsers.push(user);
            return user;
        }
        else {
            throw new Error('Usuário não existente!');
        }
    }
    catch (error) {
        console.error(error);
    }
}
;
