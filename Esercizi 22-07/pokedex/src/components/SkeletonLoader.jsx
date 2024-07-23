import React from 'react';
import './skeletonLoader.css';

const SkeletonLoader = () => {
return (
    <>
    <div className="skeleton skeleton-title"></div>
    <div className="container-tabella">
        <table className="tabella">
        <thead className="">
            <tr>
            <th className="img"></th>
            <th className="name"></th>
            <th className="genere"></th>
            <th className="number"></th>
            </tr>
        </thead>
        <tbody>
            {Array.from({ length: 3 }).map((_, index) => (
            <tr key={index}>
                <td><div className="skeleton skeleton-img"></div></td>
                <td><div className="skeleton skeleton-text"></div></td>
                <td><div className="skeleton skeleton-text"></div></td>
                <td><div className="skeleton skeleton-text"></div></td>
            </tr>
            ))}
        </tbody>
        </table>
    </div>
    </>
);
};

export default SkeletonLoader;
