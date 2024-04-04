import React from "react";
import './PopularDestinations.style.scss';
import Uzb from "../../assets/Uzbekistan.png";
import Kaz from "../../assets/Kazahstan.webp";
import Oae from "../../assets/OAE.jpg";
import {Link} from "react-router-dom";
import {TOURS_PAGE} from "../../utils/path.js";


const PopularDestinations = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div className="destination">
            <div className="destination_title">
                <h2>Популярные направления</h2>
            </div>
            <div className="destination_wrapper">
                <div className="destination_card">
                    <img className="destination_img" src={Kaz} alt="something gone wrong..."/>
                    <h4 className="destination_subtitle">
                        Этот 7-дневный в Алматы
                    </h4>
                    <p className="destination_text">Маршрут тура: Бишкек - Алматы - Бишкек</p>
                    <p className="line"></p>
                    <div className="destination_list">
                            В стоимость турпакета входит: <br/>
                            - Транспорт Бишкек-Алматы-Бишкек; <br/>
                            - Транспорт на протяжении всего тура; <br/>
                            - Посещение всех локаций; <br/>
                            - Подъем и спуск на панораму Кок-Тобе; <br/>
                            - Входной билет в зоопарк; <br/>
                            - Сопровождающий турлидер ; <br/>
                            - Бонусы компании
                    </div>
                    <Link to={TOURS_PAGE} onClick={scrollToTop}>
                        <button className="destination_button">
                            Подробнее
                        </button>
                    </Link>

                </div>
                <div className="destination_card">
                    <img className="destination_img" src={Oae} alt="something gone wrong..."/>
                    <h4 className="destination_subtitle">
                        Наследие Турции «Великолепный Век»
                    </h4>
                    <p className="destination_text">Маршрут тура: Стамбул – Чанаккале – Троя –
                        Эфэс – Кушадасы – Денизли – Памуккале –
                        Анталья.</p>
                    <p className="line"></p>
                    <div className="destination_list">
                        В стоимость турпакета входит: <br/>
                        - Авиаперелёты; <br/>
                        - Проживание в отелях 4* и 5*; <br/>
                        - Питание на базе завтрака <br/>
                        - Сопровождение гида; <br/>
                        - Переезды по программе; <br/>
                        - Медицинская страховка ;
                    </div>
                    <Link to={TOURS_PAGE} onClick={scrollToTop}>
                        <button className="destination_button">
                            Подробнее
                        </button>
                    </Link>
                </div>
                <div className="destination_card">
                    <img className="destination_img" src={Uzb} alt="something gone wrong..."/>
                    <h4 className="destination_subtitle">
                        Тур в солнечный Ташкент
                    </h4>
                    <p className="destination_text">Маршрут тура: Бишкек-Ташкент-Бишкек;</p>
                    <p className="line"></p>
                    <div className="destination_list">
                        В стоимость турпакета входит: <br/>
                        - Транспорт Бишкек-Ташкент-Бишкек; <br/>
                        - Транспорт по Ташкенту 2 дня; <br/>
                        - Сопровождающий турлидер ; <br/>
                        - Профессиональный местный гид в Ташкенте; <br/>
                        - Проживание в отеле; <br/>
                        - Завтрак в отеле; <br/>
                        - Бонусы компании
                    </div>
                    <Link to={TOURS_PAGE} onClick={scrollToTop}>
                        <button className="destination_button">
                            Подробнее
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default PopularDestinations;
