export const fetchUsers = async () => {
    const response = await fetch(`https://api.github.com/users`)
    if(response.ok) {
        return await response.json()
    }
    throw new Error()
}