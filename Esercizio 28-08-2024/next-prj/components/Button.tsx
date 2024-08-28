"use client";
import { IUser } from "@/model/user";

interface IButton {
    user: IUser;
    // onPippo: () => void;
}

function Button({user}: IButton ){
return (
    <button className="bg-green-400 p-2 rounded-xl" onClick = {() => console.log(user.website)}> Show Details</button>
)
}

export default Button;