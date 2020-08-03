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
                <div className="grid grid-rows-8">
                <div className="grid grid-cols-2 md:text-md text-xs">
                    <div className="col-span-2 md:col-span-1">
                        <h2>{title}</h2> 
                    </div>
                    <div className="col-span-2 md:col-span-1 pt-2 md:pt-0">
                        <h4 className="md:text-right sm:text-left">{duration}</h4>
                    </div>
                </div>
                <div>
                    {children}
                </div>
                </div>
            </div>
    );
}
