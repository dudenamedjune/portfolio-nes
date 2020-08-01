import React from 'react'
import './style.scss'
export const Footer = () => {
    return (
        <footer class='nes-container is-dark stick-footer'>
        <section class="icon-list grid grid-cols-3" style={{
          justifyItems: 'center'
        }}>
          <a href="https://github.com/dudenamedjune" target="_blank" rel="noopener noreferrer">
            <i class="nes-icon github is-large self-center"></i>
          </a>
          <a href="mailto:dudenamedjune@gmail.com" target="_blank" rel="noopener noreferrer">
            <i class="nes-icon gmail is-large self-center"></i>
          </a>
          <a href="https://www.linkedin.com/in/dudenamedjune/" target="_blank" rel="noopener noreferrer">
            <i class="nes-icon linkedin is-large self-center"></i>
          </a>
        </section>
      </footer>
    );
}
