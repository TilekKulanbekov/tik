import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {ABOUT_PAGE, MAIN_PAGE, TOURS_PAGE} from '../../utils/path.js';
import logo from '../../assets/icons/logo.svg';
import darkLogo from '../../assets/icons/header_logo.svg'
import './Footer.style.scss';
import Phone from '../../assets/icons/Phone.svg';
import Whatsapp from '../../assets/icons/Whatsapp.svg';
import Instagram from '../../assets/icons/instLogo.svg';
import Youtube from '../../assets/icons/Yootube.svg';
import Facebook from '../../assets/icons/Facebook.svg';
import ModalWinView from "../../components/modalWin/ModalWin.view.jsx";

const FooterView = ({ greenBackground }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div className={`footerBox ${greenBackground ? 'green-bg' : ''}`}>
            <ModalWinView isOpen={isModalOpen} onClose={closeModal} />

            <div className="footer">
                <div className="footerContacts">
                    {/*<h2>Header</h2>*/}
                    {/*<p>*/}
                    {/*    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ornare cursus sed nunc eget dictum Sed*/}
                    {/*    ornare cursus sed nunc eget dictumd nunc eget dictum Sed ornare cursus sed nunc eget dictum*/}
                    {/*</p>*/}
                    <div className="footerContactsBtn">
                        <Link to="https://www.youtube.com/@MUSAFIRUN_TOUR">
                            <img src={Youtube} alt="Youtube" />
                        </Link>
                        <Link to="https://wa.me/+996501252353">
                            <img  src={Whatsapp} alt="Whatsapp" />
                        </Link>
                        <Link to="https://www.instagram.com/musafirun.tour/">
                            <img src={Instagram} alt="Instagram" />
                        </Link>
                        <Link to="https://www.facebook.com/people/Musafirun-Tour/pfbid0GaiiwJLNnivzpVXr5WP6R9urkTVrQB294aiX9R8Math8urHH5fA85bJbykkpws9Cl/?mibextid=LQQJ4d">
                            <img src={Facebook} alt="Facebook" />
                        </Link>
                    </div>
                </div>
                <div className="footerAbout">
                    <div className="footerAddress">
                        <h2>Адрес</h2>
                        <p>
                            БЦ Maximum Турусбекова 109/1 5 этаж, 510 кабинет
                        </p>
                    </div>
                    <div className="footerPhone">
                        <h2>Телефон</h2>
                        <p>+996 501 252 353</p>
                        <p>+996 535 975 931</p>
                    </div>
                    <div className="footerNavigation">
                        <h2>Навигация</h2>
                        <p>
                            <Link to={MAIN_PAGE} onClick={scrollToTop}>Главная</Link>
                        </p>
                        <p>
                            <Link to={TOURS_PAGE} onClick={scrollToTop}>Туры</Link>
                        </p>
                        <p>
                            <Link to={ABOUT_PAGE} onClick={scrollToTop}>О нас</Link>
                        </p>
                    </div>
                </div>
            </div>

            <div className="footerLine"></div>

            <div className="footerWrapper">
                <Link to={MAIN_PAGE}>
                    {/*<img src={logo} className="logo dark-logo" alt="something gone wrong..." />*/}
                    <img src={darkLogo} alt="Dark Logo" className="logo dark-logo"/>
                </Link>
                <p>Все права защищены © MUSAFIRUN developed by CRYNOX</p>
                <button onClick={openModal} className="phoneBtn">
                    <img src={Phone} alt="" /> Связаться
                </button>
            </div>
        </div>
    );
};

export default FooterView;
