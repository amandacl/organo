import "./CampoTexto.css"

interface CampoTextoProps{
    aoAlterado:(valor:string)=>void,
    label:string,
    placeholder:string,
    valor:string,
    obrigatorio?:boolean
    tipo?:'text' | 'password'|'date'|'email'|'number'
}

const CampoTexto = ({aoAlterado,label,placeholder,valor,obrigatorio=false, tipo='text'}:CampoTextoProps) =>{
    
    const aoDigitado = (evento:React.ChangeEvent<HTMLInputElement>) =>{
        aoAlterado(evento.target.value)
    }

    return(
        <div className="campo-texto">
            <label>{label}</label>
            <input value={valor} onChange={aoDigitado} required={obrigatorio} placeholder={placeholder} type={tipo}/>
        </div>
    )
}

export default CampoTexto