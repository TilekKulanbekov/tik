import React, { useState } from "react";
import './Tours.style.scss';
import TourCardView from "../../components/tour-card/Tour-card.view.jsx";
import cardsInfo from "../../utils/CardsInfo.js"
import cardsInfoInternational from "../../utils/CardsInfoInternational.js";
import GreenSvg from "../../assets/svg.png";
import FooterView from "../../layout/footer/Footer.view.jsx";

const cities = ['Бишкек', 'Ыссык-Көл', 'Талас', 'Джалал-Абад', 'Нарын', 'Ош', 'Баткен'];

const ToursView = () => {
    const [selectedFilter, setSelectedFilter] = useState(null);

    const handleClick = (filterValue) => {
        setSelectedFilter(filterValue);
    };

    return (
        <>
            <div className="tours_title">
                <h2>Выбери свой тур</h2>
            </div>
            <div className="tours_cities">
                {cities.map((city) => (
                    <button key={city} onClick={() => handleClick(city)}>
                        {city}
                    </button>
                ))}
            </div>

            <div className="tour_cards">
                {cardsInfo.map((card) => (
                    <TourCardView
                        key={card.id}
                        id={card.id}
                        img={card.img}
                        alt={card.alt}
                        title={card.title}
                        text={card.text}
                        tourVariant={card.variant}
                        fireImg={card.fireImg}
                    />
                ))}
            </div>
            <div className="tour__cards_int">
                <div className="tours__title_int">
                    <h2>Туры в другие страны</h2>
                </div>
                <img src={GreenSvg} alt="" className="rotate"/>
                <div className="tour__cards_int-box">
                    {cardsInfoInternational.map((card) => (
                        <TourCardView
                            key={card.id}
                            id={card.id}
                            img={card.img}
                            alt={card.alt}
                            title={card.title}
                            text={card.text}
                            tourVariant={card.variant}
                            fireImg={card.fireImg}
                        />
                    ))}
                </div>
                <img src={GreenSvg} alt=""/>
            </div>
            <div style={{marginTop: '100px'}}>
                <FooterView/>
            </div>
        </>
    );
};

export default ToursView;