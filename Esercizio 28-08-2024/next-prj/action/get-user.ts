//esempio chiamata fetch renderizzato lato server
import { IUser } from "@/model/user";
export const getUser = async(id: string): Promise<IUser> => {
    try{
    const res = await fetch (`https://jsonplaceholder.typicode.com/users/${id}`);
    const data = await res.json();
    return data; 
    } catch(e: unknown){
        const message = e instanceof Error ? e.message : "error"
    throw Error(message);
    }
};
