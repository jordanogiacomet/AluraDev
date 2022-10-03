import React from 'react';
import logo from '../../assets/img/Logo.svg'
import searchButton from '../../assets/icons/search.svg'
import menuButton from '../../assets/icons/menu.svg'
import style from './Cabecalho.module.scss'
import Botao from '../Botao';

export default function Cabecalho(){
    return(
        <header className={style.cabecalho}>
            <img src={logo} alt='Logo'/>
            
            <div className={style.botoesCabecalho}>
                <Botao imgUrl={searchButton}/>
                <Botao imgUrl={menuButton}/>
            </div>
        </header>
    )


}