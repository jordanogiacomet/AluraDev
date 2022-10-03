import macButtons from '../../assets/icons/mac_buttons.svg'
import Botao from '../Botao'
import style from './CodeEditor.module.scss'



export default function CodeEditor(){
    return(
        <form className={style.formulario}>
            <fieldset className={style.formularioFieldSet}>
                        <img src={macButtons} alt="Usando como base codeEditor" />
                        <label htmlFor='code'></label>
                        <input type="text" id='code'/> 
            </fieldset>

            
            <fieldset className={style.botaoFormulario}>
                <Botao texto='Visualizar com o highlight'/>
            </fieldset>
          


        </form>
    )
}