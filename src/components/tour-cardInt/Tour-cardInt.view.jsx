import React from 'react';
import './Tour-cardInt.style.scss'
import { Link } from 'react-router-dom';
import {tourIntDetailsURL} from '../../utils/tourDetailsURL';

const TourCardIntView = ({ id, img, fireImg, alt, title, text, tourVariant }) => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div className="tourCard">
            <div className="tourImg">
                <img className="tourImage" src={img} alt={alt} />
                <div className="tourVariant">
                    {tourVariant}
                </div>
                <div className="tourSales">
                    <img src={fireImg} alt=""/>
                </div>
            </div>
            <h2>{title}</h2>
            <p>{text}</p>
            <Link onClick={scrollToTop} to={tourIntDetailsURL(id)}>
                <button>Подробнее</button>
            </Link>
        </div>
    );
};

export default TourCardIntView;
