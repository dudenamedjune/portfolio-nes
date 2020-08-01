import React from 'react'

export const Header = () => {
    return (
        <div className='grid grid-cols-3'>
        {/* <header class="message -left"> */}
            <div class="nes-balloon from-left is-dark col-span-3 col-start-1 md:col-end-2">
                <p class='title text-center'>
                    June Lara
                </p>
            </div>
            <div class="nes-balloon from-right is-dark col-span-3 md:col-start-3 md:col-end-4">
                <p class='title text-center break-all text-sm text-green-400'>
                    @dudenamedjune
                </p>
            </div>
      {/* </header> */}
        </div>
    );
}
