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
            <div className="mt-4"></div>
        <WorkCard
            company="Summary of Qualifications"
            >
     <div class="nes-table-responsive">
                <table class="nes-table is-dark">
                    <thead>
                    <tr className="text-green-400 text-center">
                        <th>Front End</th>
                        <th>Back End</th>
                        <th>API</th>
                        <th>CLI</th>
                        <th>In-between</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>React</td>
                        <td>Node</td>
                        <td>Express</td>
                        <td>Linux</td>
                        <td>Cognito (AWS Service)</td>
                    </tr>
                    <tr>
                        <td>Redux</td>
                        <td>Python</td>
                        <td>API Gateway</td>
                        <td>GIT</td>
                        <td>Markdown</td>
                    </tr>
                    <tr>
                        <td>Javascript es7 es6 es5</td>
                        <td>DynamoDB</td>
                        <td>Post Man</td>
                        <td>Hub</td>
                        <td>JWT</td>
                    </tr>
                    <tr>
                        <td>Webpack</td>
                        <td>Lambda</td>
                        <td>AJAX</td>
                        <td>VIM</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Code splitting</td>
                        <td>MongoDB</td>
                        <td>Promises, async await</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>CSS Sass</td>
                        <td>SQL</td>
                        <td>Mocha</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Enzyme, Jest</td>
                        <td>S3, Heroku, EC2</td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    </tbody>
                </table>
            </div>
            </WorkCard>
       
        </div>
            
    )
}
