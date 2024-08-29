import { getUser } from "@/action/get-user";

interface UserProps{params: {id: string}}

async function UserPage({ params }: UserProps) {
    const { id } = params;
const user = await getUser(id);
return ( <div> <ul>
    <li>{user.name}</li>
    <li>{user.email}</li>
    <li>{user.phone}</li>
    <li>{user.website}</li>
    </ul> </div>)
}

export default UserPage