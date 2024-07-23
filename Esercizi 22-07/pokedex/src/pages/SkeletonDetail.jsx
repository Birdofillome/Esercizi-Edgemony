import React from 'react';
import "./skeletonDetails.css"

const SkeletonDetail = () => {
return (
    <div className="card">
    <div className="card-header">
        <div className="skeleton skeleton-title"></div>
    </div>
    <div className="card-body">
        <div className="skeleton skeleton-img"></div>
        <div className="skeleton skeleton-text"></div>
        <div className="skeleton skeleton-text"></div>
        <div className="skeleton skeleton-text"></div>
    </div>
    </div>
);
};

export default SkeletonDetail;
