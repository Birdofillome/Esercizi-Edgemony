import React from "react";

export interface ICard {
id: string;
category: string;
title: string;
description: string;
image: string;
author: string;
}

// export interface IAuthor {
// name: string;
// }

// Creiamo una nuova interfaccia per tipizzare le props del componente
interface CardProps {
post: ICard;
}

const Card = ({ post }: CardProps) => {
return (
    <div className="flex justify-center items-center min-h-screen">
    <article
    key={post.id}
    className="w-full max-w-sm bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
    >
    <div className="relative">
    <img  className="w-full h-64 object-contain bg-gray-100 rounded-t-xl" src={post.image} alt={`Cover of ${post.title}`}/>
    <div className="absolute top-2 left-2 bg-indigo-600 text-white text-xs font-medium px-2 py-1 rounded">{post.category}</div>
    </div>
    <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 hover:text-indigo-600 transition-colors duration-300">
        {post.title}
        </h3>
        <p className="mt-2 text-sm text-gray-600">
        {post.description}
</p>
    <div className="relative mt-6 flex items-center gap-x-4">
        <div className="text-sm leading-6">
        <p className="font-semibold text-gray-900">{post.author}</p>
        </div>
        </div>
        </div>
    </article>
    </div>
);
};

export default Card;

