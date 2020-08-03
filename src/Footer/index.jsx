import React from 'react'
import './style.scss'
export const Footer = () => {
    return (
      <>
        <div className="ash-catching-pokemon grid grid-cols-7 overflow-x-hidden nes-pointer">
          <div className="col-span-1 col-start-2">
            <i className="nes-ash ml-2"></i>
          </div>

         <div className="col-span-3 pokeball__container z-10">
            <i className="nes-pokeball"></i>
         </div>

          <i className="nes-squirtle"></i>
        </div>
        <footer className='nes-container is-dark stick-footer'>
        <section className="icon-list grid grid-cols-3" style={{
          justifyItems: 'center'
        }}>
          <a href="https://github.com/dudenamedjune" target="_blank" rel="noopener noreferrer">
            <i className="nes-icon github is-large self-center"></i>
          </a>
          <a href="mailto:dudenamedjune@gmail.com" target="_blank" rel="noopener noreferrer">
            <i className="nes-icon gmail is-large self-center"></i>
          </a>
          <a href="https://www.linkedin.com/in/dudenamedjune/" target="_blank" rel="noopener noreferrer">
            <i className="nes-icon linkedin is-large self-center"></i>
          </a>
        </section>
      </footer>
      </>
    );
}
