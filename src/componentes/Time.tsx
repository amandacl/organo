import { IColaborador } from "../interfaces/IColaborador"
import Colaborador from "./Colaborador"
import "./Time.css"

interface TimeProps{
    nome:string,
    colaboradores:IColaborador[],
    corPrimaria:string,
    corSecundaria:string
}

const Time = (props:TimeProps) =>{
    return(
        (props.colaboradores.length > 0) ? <section className="time" style={{backgroundColor: props.corSecundaria}}>        
            <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>
            <div className="colaboradores">
                {props.colaboradores.map(colaborador => <Colaborador data={colaborador.data} corDeFundo={props.corPrimaria} key={colaborador.nome} imagem={colaborador.imagem} nome={colaborador.nome} cargo={colaborador.cargo}/>)}
            </div>
        </section>
        : <></>
        
    )
}

export default Time