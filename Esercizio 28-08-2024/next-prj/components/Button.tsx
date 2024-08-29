"use client";
import { IUser } from "@/model/user";
import { link } from "fs";
import Link from "next/link";
interface IButton {
    user: IUser;
}

function Button({user}: IButton ){
return (
    <Link href={`/user/${user.id}`}><button className="bg-green-400 p-2 rounded-xl"> Show Details</button></Link>
)
}

export default Button;