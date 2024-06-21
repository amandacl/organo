import "./ListaSuspensa.css"

interface ListaSuspensaProps{
label:string,
obrigatorio:boolean,
valor:string,
aoAlterado:(valor:string)=>void
items:string[]
}

const ListaSuspensa = ({aoAlterado,items,label,obrigatorio,valor}:ListaSuspensaProps) =>{
    return(
        <div className="lista-suspensa">
            <label>{label}</label>
            <select required={obrigatorio} value={valor} onChange={(evento => aoAlterado(evento.target.value))}>
                <option value=""></option>
                {items.map(item =><option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default ListaSuspensa