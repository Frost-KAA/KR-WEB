import Carousel from "react-bootstrap/Carousel"
import Image from "next/image";
import styles from "../../styles/CarouselBox.module.css"

const newsList = [
    {id:1, title:"Интрига матча", text: "Готовится к булитам", imgPath: "/assets/11.jpg"},
    {id:2, title:"Победа", text: "Жестко выиграли матч", imgPath: "/assets/22.jpg"},
    {id:3, title:"Новая форма", text: "Белая форма сменила синюю", imgPath: "/assets/33.jpg"},
    {id:4, title:"Для души", text: "5 кило прекрасного", imgPath: "/assets/44.jpg"},
]

const CarouselBox = () => (
   <Carousel>
        {newsList.map(({id, title, text, imgPath}) => (
            <Carousel.Item key={id}>
                <img
                    className="d-block w-100"
                    src={imgPath} 
                    alt="news"
                    height={600}
                />
                <Carousel.Caption className={styles.desc}>
                    <h2 style={{padding:0}}>{title}</h2>
                    <p>{text}</p>
                </Carousel.Caption>
            </Carousel.Item>
        ))}
   </Carousel>
);

export default CarouselBox;