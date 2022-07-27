import React from "react";
import './styles.css';

function Footer() {
    return (

        <footer>
            <div className="footer-center">
                <div className="redes-sociais">
                    <a href="https://www.linkedin.com/in/mariana-dos-santos-lima-aa78921b9/" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
                    <a href="https://www.instagram.com/mari_lima162/" target="_blank"><i className="fa-brands fa-instagram"></i></a>
                    <a href="https://github.com/MarianaSLima" target="_blank"><i className="fa-brands fa-github"></i></a>
                </div>

                <div className="footer-texto">
                    <small>Desenvolvido por Mariana Dos Santos Lima</small>
                </div>
            </div>
        </footer>

    );
}

export default Footer; 