import "./Banner.css"

interface BannerProps{
    img:string,
    text:string
}

export function Banner({img,text}:BannerProps){
    return(
        <header className="banner">
            <img src={img} alt={text} />
        </header>        
    )
}

