/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import style from './Landing.module.css';

const Landing = () => {
    return (
        <div className={style.landingContainer}>
            <h1 className={style.title}>¡Bienvenido a "Henry World"!</h1>
            <p className={style.text}>
                Este proyecto se centra en la implementación de conocimientos y el desarrollo de habilidades técnicas en la carrera "Full Stack Developer". En esta plataforma digital, podrás explorar información detallada sobre países y las actividades relacionadas con ellos, además de planificar tus próximas aventuras.

                Te invitamos a explorar "Henry World" y esperamos que tengas una experiencia única y de excelencia mientras te sumerges en el mundo de los viajes y la tecnología.
            </p>
            <p className={style.autor}>Andrés Soria pt14b</p>
            <Link to='/home'>
                <button className={style.btn}>Ingresar</button>
            </Link>
        </div>
    );
}

export default Landing;