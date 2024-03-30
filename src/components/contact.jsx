import React from 'react';

// Chamada da Biblioteca Hook Form.
import { useForm } from "react-hook-form";

// Chamada da Biblioteca Hook Form Yup.
import { yupResolver } from '@hookform/resolvers/yup';

// Chamada das validações em Javascript!
import { Validar } from "../js/validar";
import '../css/style.css';

import IconEmailContact from '../images/icones/iconsEmail.png';
import IconTelefoneContact from '../images/icones/iconsTelefone.png';
import IconWhatsAppContact from '../images/icones/iconsWhatsapp.png';
import IconLocalContact from '../images/icones/iconsLocalizacao.png';

const Contact = () => {

    // Estruturando elementos do Formulário HTML - Variável para campos INPUT!
    const Input = ({ label, id, name, type, register, error }) => {
        return (
            <span className="form-group">
                <label>{label}</label>
                {error && <span>{error.message}</span>}
                <input className="campForm" id={id} name={name} type={type} placeholder="Digite os dados aqui..." {...register(name)} />
            </span>
        )
    }

    // Estruturando elementos do Formulário HTML - Variável para campo TEXTAREA!
    const Textarea = ({label, id, name, register, error }) => {
        return (
            <span className="form-group">
                <label>{label}</label>
                {error && <span>{error.message}</span>}
                <textarea className="campFormMsg"  id={id} name={name} placeholder="Digite os dados aqui..." {...register(name)} ></textarea>
            </span>
        )
    }

    // Registra e verifica o Formulário, além de monitorar se o campo possui dados ou não, caso sim, remove a mensagem, se não carrega o errors!
    // Realiza também o reset caso o botão seja clicado, lembrando que todos esses recursos são construidos e executados graças a Biblioteca yupResolver!
    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: yupResolver(Validar)
    });

    // Monta o pacote de informação e testa com console.log!
    const onSubmit = data => {
        console.log(data);
    }

    return (
        <section className="contact" id="contact">
            <div className="wrap">
                <h1 className="titleAbout">Contato!</h1>
                <div className="boxContact">
                    <div className="infoCt">
                        <p>Tira todas as suas dúvidas sobre os nossos serviços ou realize um orçamento.</p>
                        <p>Estes são os nossos principais meios de contato.</p>
                        <div>
                            <ul className="ulContact">
                                <li className="listCtc">
                                    <img src={IconEmailContact} alt="Icone de E-mail." title="Icone de E-mail." className="iconCtc" />
                                    <span> contato@tecnologia.com.br</span>
                                </li>
                                <li className="listCtc">
                                    <img src={IconTelefoneContact} alt="Icone de Telefone." title="Icone de Telefone." className="iconCtc" />
                                    <span> (43) 0000-0000</span>
                                </li>
                                <li className="listCtc">
                                    <img src={IconWhatsAppContact} alt="Icone de WhatsApp." title="Icone de WhatsApp." className="iconCtc" />
                                    <div className="boxWhatsAapp">
                                        <span> <a href="https://wa.me/5543988111908" target="_blank" className="linkWhatsApp">(43) 9 0000-0000</a></span>
                                        <span className="infoWhatsApp">Clique no número!</span>
                                    </div>
                                </li>
                                <li className="listCtc">
                                    <img src={IconLocalContact} alt="Icone de Localização." title="Icone de Localização." className="iconCtc" />
                                    <span> Avenida Teste Nº100, CEP: 00000000 Londrina - PR.</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="formContact">
                        {/* onSubmit junto com handleSubmit pertencente a Biblioteca Hook Form, seleciona e monitora tudo que acontece com Formulário. */}
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <label>Digite seu Nome:</label>
                            <Input type="text" name="nome" id="nome" register={register} error={errors.nome} />

                            <label>Digite seu E-mail:</label>
                            <Input type="text" name="email" id="email" register={register} error={errors.email} />

                            <label>Digite o Assunto:</label>
                            <Input type="text" name="ass" id="ass" register={register} error={errors.ass} />

                            <label>Digite sua Mensagem:</label>
                            <Textarea type="text" name="msg" id="msg" register={register} error={errors.msg}></Textarea>

                            <div className="alignBtn">
                                <button type="submit" className="btnForm" name="btnEnviar">enviar</button>
                                <button type="reset" className="btnFormReset" onClick={() => reset()}>Resetar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div className="mapsCt">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3663.8968486641197!2d-51.17902662467707!3d-23.31950107896674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94eb4313ff0ee975%3A0x1c33d6cf3ae5b478!2sWMBarros%20Treinamento%20em%20TI%20Cursos%20PHP%2C%20C%23%2C%20GAMES%2C%20Wordpress!5e0!3m2!1spt-BR!2sbr!4v1703938726506!5m2!1spt-BR!2sbr" width="100%" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className="borderMaps"></iframe>
            </div>
        </section>
    )
};

export default Contact;