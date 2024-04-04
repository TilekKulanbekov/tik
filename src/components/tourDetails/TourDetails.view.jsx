import React, {useState} from "react";
import './TourDetails.style.scss';
import { useParams } from 'react-router-dom';
import cardsInfo from "../../utils/CardsInfo.js";
import AlaArchNational from '../../assets/ala-archa-national.png'
import DropdownButton from "../dropdown/Dropdown.view.jsx";
import FooterView from "../../layout/footer/Footer.view.jsx";
import GreenSvg from "../../assets/svg.png";
import ModalWinView from "../modalWin/ModalWin.view.jsx";


const TourDetailsView = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const { id } = useParams();

    const card = cardsInfo.find(card => card.id === parseInt(id));

    if (!card) {
        return <div className="tour-details">Tour not found</div>;
    }

    // const additionalInfo = (
    //     <>
    //         <p>Дополнительная информация 1</p>
    //         <p>Дополнительная информация 2</p>
    //     </>
    // );

    const { title } = card;
    const words = title.split(' ');
    const lastIndex = words.length - 1;

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <ModalWinView isOpen={isModalOpen} onClose={closeModal} />

            <div className="tour-details__main">
                <img className="tour-details__main-img" src={card.img} alt={card.alt} />
                <h2 className="tour-details__main-title">{card.title}</h2>
                <p className="tour-details__main-text">{card.text}</p>
                <button onClick={openModal} className="tour-details__main-btn">Забронировать</button>
            </div>
            <div className="tour-details__info">
                <img className="tour-details__info-img" src={AlaArchNational} alt=""/>
                <div className="tour-details__info_box">
                    {words.length === 2 ? (
                        <h2 className="tour-details__info_box-title">
                            {words[0]} <span>{words[1]}</span>
                        </h2>
                    ) : (
                        <h2 className="tour-details__info_box-title">
                            {words.slice(0, lastIndex - 1).join(' ')}
                            {' '}
                            <span>{words.slice(lastIndex - 1).join(' ')}</span>
                        </h2>
                    )}
                    <p className="tour-details__info_box-text">{card.additionalText}</p>
                </div>
            </div>
            <div className="tour-details__gallery">
                {card.pictures.map((picture, index) => (
                    <img className="tour-details__gallery_img" key={index} src={picture} alt={`Picture ${index + 1}`} />
                ))}
            </div>
            <div className="tour-details__plan">
                {card.tourPlan && card.tourPlan.length > 0 && (
                    <h2 className="tour-details__plan-title">
                        <span className="tour-details__plan-title-text">План</span>
                    </h2>
                )}

                {card.tourPlan && card.tourPlan.length > 0 && (
                    <ul className="tour-details__plan-list">
                        {card.tourPlan.map((item, index) => (
                            <li key={index} className="tour-details__plan-item">
                                <span className="tour-details__plan-item-label">{item.label}</span> {item.text}
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            <div className="tour-details__additional-info">
                <span className="tour-details__additional-info_title">Дополнительная</span>
                {card.tourSchedule.map((item, index) => (
                    <div key={index} className="tour-details__additional-info_text">
                        <p>{item.title}</p>
                        <p>{item.price}</p>
                        <p>{item.price1}</p>
                    </div>
                ))}
            </div>
            {/*<div className="tour-details__important-info">*/}
            {/*    <h2 className="tour-details__important-info_title">Важно</h2>*/}
            {/*    <DropdownButton buttonText="Что взять с собой ?" dropdownContent={additionalInfo} />*/}
            {/*</div>*/}

            <img src={GreenSvg} alt="" className="footerBg"/>
            <FooterView greenBackground/>
            <div className="footerBg_absolute">

            </div>
        </>
    );
};

export default TourDetailsView;
