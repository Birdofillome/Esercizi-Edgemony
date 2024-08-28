"use client";

import { getUser } from "@/action/get-user";
import { IUser } from "@/model/user";
import {useState, useEffect, useTransition} from "react";

function User() {
const [user, setUser] = useState<IUser | null>(null);
const [isPending, starTransition] = useTransition();

const handleGetUser = async() => {
starTransition(async() => {
    try {
        const data = await getUser();
        setUser (data);
    } catch (error: unknown){
        const message = error instanceof Error ? error.message : "error";
        console.log(message);
    }
})
};

useEffect(() => {
handleGetUser();
},[])

return <div>
    {isPending && <h1>Caricamento</h1>}
<div>{user?.name}</div>
</div>
}


export default User;