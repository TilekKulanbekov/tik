import React from "react";
import './Reviews.style.scss';
import Carousel from "../carousel/Carousel.view";
import ava1 from '../../assets/ava1.png';
import ava2 from '../../assets/ava2.png';
import ava3 from '../../assets/ava3.png';
import CardSlider from "../carousel2/Carousel2.view";


const items = [
    {
        id: 1,
        name: 'Азат Керимбеков',
        content: 'Спасибо за незабываемые впечатления от Бухары и Самарканда. Потрясающие памятники культуры, прекрасные гиды, отличная организация программы. ',
        img: ava1,
        alt: 'Азат Керимбеков',
    },
    {
        id: 2,
        name: 'Кадыр Жумалов',
        content: 'Это было незабываемо. То, насколько качественно и тщательно вы организовали все моменты путешествия, стало для меня большим и приятным дополнением к всему тому, что я увидел в ходе поездки.',
        img: ava2,
        alt: 'Кадыр Жумалов',
    },
    {
        id: 4,
        name: 'Эсен Касенов',
        content: 'Спасибо большое за организацию всех экскурсий. Очень понравились все гиды. Спасибо за организацию, все четко, везде встречали, провожали, Интересно рассказывали. Мы остались довольны.',
        img: ava3,
        alt: 'Эсен Касенов',
    },
    {
        id: 5,
        name: 'Антон Рубцов',
        content: 'Ещё долго перед глазами было лицо гида, знающего до мелочей историю. Он провёл с нами незабываемый день, полный удивительных моментов тех времён.',
        img: ava2,
        alt: 'Кадыр Жумалов',
    },
    {
        id: 6,
        name: 'Батыр Асаналиев',
        content: 'Концентрация природных и культурных красот очень высокая, но в принципе остается время для осмысления увиденного и для отдыха тоже.',
        img: ava3,
        alt: 'Эсен Касенов',
    }
];


const ReviewsView = () => {

    return (
        <div className="reviews">
            <div className="reviews_text">
                <h2>Отзывы клиентов</h2>
            </div>
            {/*<Carousel items={items}/>*/}
            <CardSlider items={items}/>
        </div>
    );
};

export default ReviewsView;
