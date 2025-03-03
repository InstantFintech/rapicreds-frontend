import './Reviews.css';
// @ts-ignore
import React, {useEffect} from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export default function Reviews() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

  useEffect(() => {
  }, []); // Este useEffect se ejecutará solo una vez después de la primera renderización


  return (
    <div className="carousel-container">
      <div className="carousel-title-container">
        <p className="carousel-title">Reseñas de nuestros usuarios.</p>
      </div>

      <Carousel
        swipeable={false}
        draggable={false}
        showDots={false}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={false}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="transform 300ms ease-in-out"
        transitionDuration={500}
        containerClass="carousel-item"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        deviceType="desktop"
        dotListClass="custom-dot-list-style"
        itemClass="review-item"
        centerMode={true}
      >
        <div >
          <p className="review-description">Muy Buena Atención. Resolvieron rápido mi necesidad del prestamo. Super recomendable!!</p>
          <p className="review-user">Lautaro Nieva</p>
          <p className="review-date">Enero 2025</p>
        </div>
        <div >
          <p className="review-description">Super recomendable. Pedis la plata y sin vueltas te dicen cuanto te prestan . Te llaman por telefono y listo tenes tu plata.</p>
          <p className="review-user">Ismael Lopez</p>
          <p className="review-date">Enero 2025</p>
        </div>
        <div >
          <p className="review-description">La Atención fue perfecta, te informan todo y te sacan cualquier duda que tengas con el credito. De diez</p>
          <p className="review-user">Camila Ramirez</p>
          <p className="review-date">Enero 2025</p>
        </div>
        <div >
          <p className="review-description">Excelente! 100 x 100 confiables, ya saque 3 prestamos con RapiCreds y me ayudaron mucho! Gracias!</p>
          <p className="review-user">Julieta Persico</p>
          <p className="review-date">Enero 2025</p>
        </div>
      </Carousel>


      <div className="test-container">
        <svg className="testt">
          <path className="test">
          </path>

        </svg>
      </div>


    </div>

  );
}
