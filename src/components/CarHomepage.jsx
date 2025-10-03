
import styles from '../styles/carhomepage.module.css';
import vechile from '../assets/Images/benze.jpg';
import '../assets/Icons/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../assets/Icons/icons'; 
import SearchButton from '../components/SearchButton';

const CarHomepage = ( {homepage} ) => {
  const cars = [
    {
      id: 1,
      car: vechile,
      brand: 'TOYOTA',
      model: 'Camry Hybrid XSE White',
      price: 'N 11,450,000',
      year: '2020'
    },
    {
      id: 2,
      brand: 'TOYOTA',
      car: vechile,
      model: 'Camry Hybrid XSE White',
      price: 'N 11,450,000',
      year: '2020'
    },
    {
      id: 3,
      brand: 'TOYOTA',
      car: vechile,
      model: 'Camry Hybrid XSE White',
      price: 'N 11,450,000',
      year: '2020'
    }
  ];

  return (
<div className={styles.car_homepage}>
      {/* Header Section */}
      <header className={styles.page_header}>
        <h1 className={styles.popular_heading}>Popular</h1>
      <SearchButton />  
      </header>

      <div className={styles.cars_grid}>
        {cars.map(car => (
          <div key={car.id} className={styles.car_card}>
            
            <div className={styles.card_header}>
              <img src={car.car} alt='a car' />
              <button className={styles.wishlist_btn}>
                ♥ Save to Wishlist
              </button>
            </div>

            <div className={styles.car_details}>
              <h3 className={styles.car_brand}>{car.brand}</h3>
              <h2 className={styles.car_model}>{car.model}</h2>
              
              <div className={styles.car_price_year}>
                <span className={styles.price}>{car.price}</span>
                <span><FontAwesomeIcon icon={['fab', 'calendar-days']} /></span>
                <span className={styles.year}>{car.year}</span>
              </div>

              <button className={styles.details_btn}>See Vehicle Details</button>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.see_more_container}>
        <button className={styles.see_more_btn}>See More</button>
      </div>
    </div>
  );
};

export default CarHomepage;