import './CampoTexto.css'
export const CampoTexto = (props) => {
    const  placeHolderModificada =`${props.placeholder}`
    return(
        <div className="campo-texto">
            <label>{props.label}</label>
            <input placeholder={placeHolderModificada}/>
        </div>
    )
}

