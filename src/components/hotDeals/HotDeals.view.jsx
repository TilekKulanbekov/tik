import React, {useState} from "react";
import './HotDeals.style.scss';
import Dubay from "../../assets/dubay.png";
import Stambul from "../../assets/stambul-card.png";
import Kaz from "../../assets/Kazahstan.webp";
import Oae from "../../assets/OAE.jpg";
import {Link} from "react-router-dom";
import {TOURS_PAGE} from "../../utils/path.js";
import ModalWinView from "../modalWin/ModalWin.view.jsx";

const HotDeals = () => {
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
        <div className="deals">
            <ModalWinView isOpen={isModalOpen} onClose={closeModal} />

            <div className="deals_title">
                <h2>Горящие туры</h2>
            </div>
            <div className="deals_box">
                <div className="deals_box__wrapper">
                    <div className="deals_card">
                        <img className="deals_img" src={Dubay} alt="something gone wrong..."/>
                        <h4 className="deals_subtitle">
                            Тур в Дубай
                        </h4>
                        <p className="deals_text">Маршрут тура: Бишкек - Дубай - Бишкек</p>
                        <p className="line"></p>
                        <div className="deals_list">
                            В стоимость турпакета входит: <br/>
                            - Транспорт Бишкек-Дубай-Бишкек; <br/>
                            - Транспорт на протяжении всего тура; <br/>
                            - Посещение всех локаций; <br/>
                            - Проживание в отеле; <br/>
                            - Завтрак в отеле; <br/>
                            - Сопровождающий турлидер ; <br/>
                            - Бонусы компании
                        </div>
                        <button onClick={openModal} className="deals_button">
                            Подробнее
                        </button>
                    </div>
                    <div className="deals_card">
                        <img className="deals_img" src={Oae} alt="something gone wrong..."/>
                        <h4 className="deals_subtitle">
                            Тур в Дубай
                        </h4>
                        <p className="deals_text">Маршрут тура: Бишкек - Дубай - Бишкек</p>
                        <p className="line"></p>
                        <div className="deals_list">
                            В стоимость турпакета входит: <br/>
                            - Транспорт Бишкек-Дубай-Бишкек; <br/>
                            - Транспорт на протяжении всего тура; <br/>
                            - Посещение всех локаций; <br/>
                            - Проживание в отеле; <br/>
                            - Завтрак в отеле; <br/>
                            - Сопровождающий турлидер ; <br/>
                            - Бонусы компании
                        </div>
                        <button onClick={openModal} className="deals_button">
                            Подробнее
                        </button>
                    </div>
                </div>
                <div className="deals_box__wrapper">
                    <div className="deals_card">
                        <img className="deals_img" src={Stambul} alt="something gone wrong..."/>
                        <h4 className="deals_subtitle">
                            Наследие Турции «Стамбул 2н. – Анталия 5н.»
                        </h4>
                        <p className="deals_text">Маршрут тура: Стамбул – Анталья.</p>
                        <p className="line"></p>
                        <div className="deals_list">
                            В стоимость турпакета входит: <br/>
                            - Авиаперелёты; <br/>
                            - Трансфер а/п – отель – а/п; <br/>
                            - Питание в Стамбуле по системе HB; <br/>
                            - Питание в Анталии по системе AI; <br/>
                            - Сопровождение гида; <br/>
                            - Переезды по программе; <br/>
                            - Медицинская страховка ;
                        </div>
                        <button onClick={openModal} className="deals_button">
                            Подробнее
                        </button>
                    </div>
                    <div className="deals_card">
                        <img className="deals_img" src={Kaz} alt="something gone wrong..."/>
                        <h4 className="deals_subtitle">
                            Наследие Турции «Стамбул 2н. – Анталия 5н.»
                        </h4>
                        <p className="deals_text">Маршрут тура: Стамбул – Анталья.</p>
                        <p className="line"></p>
                        <div className="deals_list">
                            В стоимость турпакета входит: <br/>
                            - Авиаперелёты; <br/>
                            - Трансфер а/п – отель – а/п; <br/>
                            - Питание в Стамбуле по системе HB; <br/>
                            - Питание в Анталии по системе AI; <br/>
                            - Сопровождение гида; <br/>
                            - Переезды по программе; <br/>
                            - Медицинская страховка ;
                        </div>
                        <button onClick={openModal} className="deals_button">
                            Подробнее
                        </button>
                    </div>
                </div>
            </div>
            <Link to={TOURS_PAGE} onClick={scrollToTop}>
                <button className="tours_btn">
                    Все туры
                </button>
            </Link>
        </div>
    );
};

export default HotDeals;
