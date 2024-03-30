import React from 'react';
import ImgTopo from '../images/btnNavInicio.png'

const BtnTopo = () => (
    <div class="btnNav">
        <a href="#top">
            <img src={ImgTopo} alt="Voltar para o Início!" title="Voltar para o Início!" class="btnNavTopo"/>
        </a>
    </div>
);

export default BtnTopo;