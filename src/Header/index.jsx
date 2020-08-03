import React from 'react'

export const Header = () => {
    return (
        <div className='grid grid-cols-11'>
            <div className="nes-balloon from-left is-dark col-span-11 col-start-1 md:col-end-5">
                <p className='title text-center'>
                    June Lara
                </p>
            </div>
            <div className="nes-balloon from-right is-dark col-span-11 md:col-start-7 md:col-end-12">
                <p className='title text-center break-all text-sm text-green-400'>
                    @dudenamedjune
                </p>
            </div>
        </div>
    );
}
