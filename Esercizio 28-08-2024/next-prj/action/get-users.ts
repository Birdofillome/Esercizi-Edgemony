import { IUser } from "@/app/(models)/user";
export const getUsers = async(): Promise<IUser[]> => {
    try{
    const res = await fetch ("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    return data; 
    } catch(e: unknown){
        const message = e instanceof Error ? e.message : "error"
    throw Error(message);
    }
};
