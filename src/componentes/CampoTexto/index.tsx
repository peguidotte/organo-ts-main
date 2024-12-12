import './CampoTexto.css'

interface CampoTextoProps {
    aoAlterado: (valor: string) => void
    label?: string
    placeholder?: string
    obrigatorio?: boolean
    valor: string
    type?: 'text' | 'date' | 'email' | 'password' | 'number'
}

const CampoTexto = ({aoAlterado, label, placeholder, obrigatorio = false, valor, type = "text"} :CampoTextoProps) => {

    const placeholderModificada = `${placeholder}...` 

    const aoDigitado = (evento: React.ChangeEvent<HTMLInputElement>) => {
        aoAlterado(evento.target.value)
    }

    return (
        <div className="campo-texto">
            <label>
                {label}
            </label>
            <input value={valor} onChange={aoDigitado} required={obrigatorio} placeholder={placeholderModificada} type={type}/>
        </div>
    )
}

export default CampoTexto