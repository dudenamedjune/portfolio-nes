import React from 'react'

export const WorkCard = ({
    company,
    title,
    duration,
    children,
}) => {
    return (
        <div className="nes-container with-title">
        <p className="title">{company}</p>
        <div className="grid grid-cols-2">
            <h2>{title}</h2>
            <h4 className="text-right">{duration}</h4>
        </div>
        {children}
    </div>
    );
}
