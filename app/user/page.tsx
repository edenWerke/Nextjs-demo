import React from 'react'
interface User{
    id:number;
    name:string;
}

const UserPage = async ()=>{
const res= await fetch('https://jsonplaceholder.typicode.com/users',{cache:'no-store'})
const users:User[]=await res.json();

    return (
        <>
        <h1>users i fetch</h1>
        <ol>
                {users.map(user=><li key={user.id}>{user.name}</li>)}
            </ol>
        
        </>
    )
}
export default UserPage;