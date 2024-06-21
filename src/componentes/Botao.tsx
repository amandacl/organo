import "./Botao.css"

interface BotaoProps{
    children:React.ReactNode|string}

const Botao = ({children}:BotaoProps) =>{
    console.log(children)
    return (
        <button className="botao">{children}</button>
    )
}

export default Botao