import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MAIN_PAGE, TOURS_PAGE, ABOUT_PAGE } from '../../utils/path.js';
import LanguageSwitchButton from '../../components/lngSwitchBtn/LngSwitchBtn.view.jsx';
import Phone from '../../assets/icons/Phone.svg';
import logoLight from '../../assets/icons/logo.svg';
import logoDark from '../../assets/icons/header_logo.svg';
import './Header.style.scss';
import ModalWinView from "../../components/modalWin/ModalWin.view.jsx";

const HeaderView = () => {
    const location = useLocation();
    const [logo, setLogo] = useState(logoLight);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        if (location.pathname === TOURS_PAGE || location.pathname === ABOUT_PAGE) {
            setLogo(logoDark);
        } else {
            setLogo(logoLight);
        }
    }, [location.pathname]);

    const toggleMenu = () => {
        setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };


    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div>
            <ModalWinView isOpen={isModalOpen} onClose={closeModal} />

            <div className="navigation">
                <div className="navLogo">
                    <Link to={MAIN_PAGE}>
                        <img src={logo} alt="Logo" />
                    </Link>
                    <button className="burgerMenu" onClick={toggleMenu}>
                        <span className="burgerLine"></span>
                        <span className="burgerLine"></span>
                        <span className="burgerLine"></span>
                    </button>
                </div>
                <nav className={`nav ${isMenuOpen ? 'isMenu' : ''}`}>
                    <ul className="nav__list">
                        <li>
                            <Link
                                start="true"
                                to={MAIN_PAGE}
                                className={location.pathname === MAIN_PAGE ? 'active' : ''}
                                onClick={closeMenu}
                            >
                                Главная
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={TOURS_PAGE}
                                className={location.pathname === TOURS_PAGE ? 'active' : ''}
                                onClick={closeMenu}
                            >
                                Туры
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={ABOUT_PAGE}
                                className={location.pathname === ABOUT_PAGE ? 'active' : ''}
                                onClick={closeMenu}
                            >
                                О нас
                            </Link>
                        </li>
                            <li>
                                <LanguageSwitchButton />
                            </li>
                            <li>
                                <button className="phoneBtn" onClick={openModal}>
                                    <img src={Phone} alt="" /> Связаться
                                </button>
                            </li>
                    </ul>
                </nav>

            </div>
        </div>
    );
};

export default HeaderView;
