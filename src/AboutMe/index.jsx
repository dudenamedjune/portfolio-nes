import React from 'react'
const Question = ({ question }) => {
    return <section className="message -left">
    <div className="nes-balloon from-left">
        <p>{question}</p>
    </div>
</section> 
}

const Response = ({ response }) => {
    return <section className="message -right">
    <div className="nes-balloon from-right is-dark  ml-12 md:ml-64">
        <p>{ response }</p>
    </div>
</section> 
}
const questionsAndResponse = [
   { 
       question: 'Tell us about your background',
       response: `Computers are awesome;  think of the first layer of the seven-layer OSI model, wow. It's a merely beautiful transition from primitive living to sending pulses of electricity and now, light with fiber to bring so many life-changing products to life. I started tinkering with CSS and HTML in junior high when Myspace was popular and proceeded to take a web development elective in my upperclassman high school years. I traditionally started pursuing computer science. I then shortly decided to join the new wave of Academics and graduated from The University of Texas' Full Stack Engineering/Web Development program. Let me traverse a bit - with most of my free time during an unexplained gap; I took an interest in advancing global financial payment systems. For our final project, a classmate and I founded an application called Ugate, a currency exchange connecting the world to Ripple's payment ledger. As a Full Stack Web developer, I work alongside the team and various clients to bring product ideas to life. My strongest stack is the MERN stack, MongoDB, Express, React, and Nodejs, however, my package.json can elaborate on many more technologies used within each unique application. I appreciate the opportunity to push the edge of bleeding-edge web as I am persistently studying and attending my active meetups, always surrounded by an awesome community. In the morning, I wake up to make unprecedentedly fast, modern, responsive applications and consume a coffee or two.`,
    },
    {
        question: 'You are given the day off to do anything but work. How do you spend your day?',
        response: 'Enjoy the outdoors, hang up the hammock, and listen to some podcasts. Although I genuinely enjoy Udemy - does that count as work?' 
    },
    {
        question: 'Who is your idol/hero?',
        response: 'For sure, Alan Turing is solely responsible for the creation of the computer with the release of his "white paper" on Computable Numbers, with an application to the Entscheidungsproblem. With his help, an estimated 14 million - 21 million lives were saved. Despite all of those unrepayable accomplishments, Turing was chemically castrated for being a homosexual and died at the young age of 42 by taking a bite of an apple laced with cyanide.' 
    },
    {
        question: 'What would people be surprised to know about you?',
        response: `I grew up in a small town, Claude, TX, with a population of 1,100 people. Also, I'm not too fond of really soft things; my senses don't like the texture.` 
    },
    {
        question: 'You can become a master of a skill instantly tomorrow morning. What skill would that be and why?', 
        response: `Copious amounts of Data Science - there are so many possibilities within the field of computer science. While attending my ReactJS meetup at Bazaarvoice, one of the speakers was a data scientist on a Microsoft's Full Stack team. They created a machine learning platform to analyze millions of messages on social media to grab refugees' locations in Benghazi to help the UN locate terrorists without harming civilians. I would love to have those skills to create humanitarian tools like that instantly, but I'll be happy to acquire them through the years.
        ` 
    },
    {
        question: 'If you had to be trapped in a tv show for a month, which would you choose?',
        response: `This is a hard one. I'm going to have to go with Rick & Morty thou... Blitz & Chips, schezwan sauce. How would I survive without my plumbus?`
    }
 
];


export const AboutMe = () => {
    return (
        <section class="nes-container">
            <section class="message-list">
                {questionsAndResponse.map(({
                    question,
                    response
                }) => {
                    return (
                        <>
                            <Question question={question} />
                            <Response response={response} />
                        </>
                    )
                })}
            </section>
      </section>    
    )
}
