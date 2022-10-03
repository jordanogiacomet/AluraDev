import React from "react";
import style from './Botao.module.scss'


interface Props{
    imgUrl?: string
    texto?: string
    alt?: string
  
}

export default function Botao ({imgUrl ='' , texto ='', alt=''} : Props){
   


    return (
        <button className={style.botao}><img src={imgUrl} alt={alt}/>{texto}</button>
    )
}