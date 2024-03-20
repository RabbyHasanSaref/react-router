import { useLoaderData } from "react-router-dom";
import User from "../User/User";

const Users = () => {
    const users = useLoaderData();
    // console.log(users)
    return (
        <div>
            <h1>Users: {users.length}</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam laborum error mollitia quibusdam minima esse ab sint. Hic amet cupiditate ipsam voluptatum perferendis. Expedita, maxime eos distinctio tempora impedit dignissimos?</p>

            <div style={{
                display:'grid',
                gridTemplateColumns:'auto auto auto',
                gap:'10px'
            }}>
                {
                    users.map(user => <User key={user.id} user={user}></User>)
                }
            </div>
        </div>
    );
};

export default Users;