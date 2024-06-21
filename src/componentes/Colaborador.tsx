import "./Colaborador.css"
import {IColaborador} from '../interfaces/IColaborador'



const Colaborador = ({nome,cargo,corDeFundo,imagem,data}:IColaborador) =>{
    return(
        <div className="colaborador">
            <div className="cabecalho" style={{backgroundColor: corDeFundo}}>
                <img src={imagem} alt={nome}/>
            </div>
            <div className="rodape">
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
                <h5>{new Date(data).toLocaleDateString()}</h5>
            </div>
        </div>
    )
}

export default Colaborador