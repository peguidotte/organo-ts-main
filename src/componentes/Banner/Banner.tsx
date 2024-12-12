import './Banner.css'
import React from 'react'

interface BannerProps {
    src: string
    alt?: string 
}

const Banner = ({src, alt} :BannerProps) => {

    return (
        <header className="banner">
            {/*<img src="/imagens/banner.png" alt="O banner principal da página do Organo"/>*/}
            <img src={src} alt={alt}/>
        </header>
    )
}

export default Banner

