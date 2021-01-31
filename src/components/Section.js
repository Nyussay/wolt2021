
import OneRest from "./OneRest";
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

const Section = ({section}) => {
    const {title, restaurants} = section;    

    return (
            <div className="container">
                <h1>{title}</h1>
                <div className="carousel">
                    <Carousel 
                    arrows 
                    infinite
                    dots
                    draggable
                    slidesPerPage={3}
                    breakpoints={{
                        1300: { slidesPerPage: 2 },
                        1000: { slidesPerPage: 2.5 },
                        900: { slidesPerPage: 2.5, centered: true },
                        750: { slidesPerPage: 2, centered: true },
                        630: { slidesPerPage: 2, centered: true },
                        450: { slidesPerPage: 1.5, centered: false },
                        350: { slidesPerPage: 1.3, centered: false },
                      }}
                    > 
                        {restaurants.map((restaurant, index)=> {
                            return (   
                                <OneRest restaurant={restaurant} key={index}/>          
                            )
                            })
                        }
                    </Carousel>
                </div>
            </div>  
    )
}

export default Section;