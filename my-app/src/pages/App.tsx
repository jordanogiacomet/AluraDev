import React from 'react';
import Cabecalho from '../components/Cabecalho';
import CodeEditor from '../components/CodeEditor';
import style from './App.module.scss'



function App() {
  return (
    <div className={style.AppStyle}>
        <Cabecalho/>
        <CodeEditor/>
    </div>
  );
}

export default App;
