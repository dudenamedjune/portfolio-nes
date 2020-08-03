import React from 'react'
import { WorkCard } from './WorkCard';
const experience = [
    {
        company: "AIG" ,
        title: "Sr. Software Developer",
        duration: "09/2019 - Current",
        details: [
            "Built applications in an agile environment.",
            "Managed and deployed the applications in environments.",
            "Test first mindset",
            "Worked on client side optimization,code splitting and async loading",
            "Inner-source collaboration across multiple teams and journeys",
            "Squashed lots of bugs",
            "Governed releases "
        ]
    },
    {
        company: "Liquid Frameworks",
        title: "Software Developer",
        duration: "05/2019 - 09/2019",
        details: [
            'Built green field react and salesforce single page applications. Using latest and greatest since they were all green field.',
            'React hooks only paradigm',
            'Created a drag and drop workflow tool. Client can name a process link lines for pass and fail and in return the system will set up those rules in salesforce. Behind the scene it used SOQL, and integrated with the jsforce authentication object.',
            'Also released another production app that created tours dynamically in their flagship FiledFX.'
        ]
    },
    {
        company: "Cognizant (AIG)",
        title: "Full Stack Software Developer",
        duration: "12/2017 - 05/2019",
        details: [
            'Helped build life and retirement services at AIG',
            'Agile',
            'Optimized reporting for a new real time solution',
            'Planned team release and branching strategy to work with constraints',
            'Defined testing guide lines and reached 0-80% coverage on a 800k+ line code base',
            'Won the AIG Hackathon'
        ]
    },
    {
        company: "Pixel Strike",
        title: "Full Stack Software Developer",
        duration: "04/2017 - 11/2017",
        details: [
            'Full stack MVP MERN application for Actuarial Analysis',
            'Worked along data science and designers',
            'Once MVP was approved, the app moved to serverless on AWS using Lambda, API gateway, S3, Cognito, and DynamoDB',
            'Received my AWS developer certification'
        ]
    }
];
export const Work = () => {
    return (
        <div className="nes-container with-title">
            <p className="title">Work</p>
            {
                experience.map(({
                    details = [],
                    ...rest
                }, index) => {
                    return (
                        <>
                        { index !== 0 && <div className="mt-4" /> }
                        <WorkCard 
                            {...rest} 
                            >
                             <div className="lists ml-8 mt-2">
                                <ul className="nes-list is-circle">
                                    {details.map(detail => 
                                        <li>{detail}</li> 
                                     )}
                                </ul>
                            </div>
                            </WorkCard>
                            </>
                    )
                })
            }
        </div>
            
    )
}
