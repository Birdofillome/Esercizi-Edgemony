//esempio chiamata fetch renderizzato lato server
import { IUser } from "@/model/user";
export const getUser = async(): Promise<IUser> => {
    try{
    const res = await fetch ("https://jsonplaceholder.typicode.com/users/1");
    const data = await res.json();
    return data; 
    } catch(e: unknown){
        const message = e instanceof Error ? e.message : "error"
    throw Error(message);
    }
};
