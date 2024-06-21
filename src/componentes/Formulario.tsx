import "./Formulario.css"
import { useState } from "react"
import CampoTexto from "./CampoTexto"
import ListaSuspensa from "./ListaSuspensa"
import Botao from "./Botao"
import { IColaborador } from "../interfaces/IColaborador"

interface FormularioProps{
    aoColaboradorCadastrado:(colaborador:IColaborador)=>void,
    times:string[]
}

const Formulario = (props:FormularioProps) =>{

    const [nome, setNome]=useState('')
    const [cargo, setCargo]=useState('')
    const [imagem, setImagem]=useState('')
    const [time, setTime] = useState('')
    const [data, setData]=useState('')

    const aoSalvar = (evento:React.FormEvent<HTMLFormElement>) =>{
        evento.preventDefault()
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time,
            data
        })
        setCargo("")
        setImagem("")
        setNome("")
        setTime("")
        setData("")
    }

    return(
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto obrigatorio={true} valor={nome} aoAlterado={valor => setNome(valor)} label="Nome" placeholder="Digite o seu nome"/>
                <CampoTexto obrigatorio={true} valor={cargo} aoAlterado={valor => setCargo(valor)} label="Cargo" placeholder="Digite o seu cargo"/>
                <CampoTexto  valor={imagem} aoAlterado={valor => setImagem(valor)} label="Imagem" placeholder="Digite o endereço da imagem"/>
                <CampoTexto  valor={data} aoAlterado={valor => setData(valor)} label="Data de entrada no time" placeholder="" tipo="date"/>
                <ListaSuspensa obrigatorio={true} label="Time" items={props.times} valor={time} aoAlterado={valor => setTime(valor)}/>
                <Botao>Criar Card</Botao>
            </form>
        </section>
    )
}

export default Formulario