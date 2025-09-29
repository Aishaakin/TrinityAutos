
import React, { useState } from 'react';
import styles from '../styles/search.module.css'
import benze from '../assets/Images/benze.jpg';
import ferrari from '../assets/Images/ferrari.webp';
import honda from '../assets/Images/honda.jpeg';
import lexus from '../assets/Images/lexus.avif';
import toyota from '../assets/Images/toyota.jpg';
// import { width } from '@fortawesome/free-solid-svg-icons/fa0';

const brandData = {
    Toyota: {
        image: toyota,
        description: 'Camry Hybrid XSE White',
        price: '₦ 11,450,000',
    },
    Honda: {
        image: honda,
        description: '2026 Honda CR-V Hybrid',
        price: '₦ 23,450,000',
    },
    Ferrari: {
        image: ferrari,
        description: 'Ferrari Roma',
        price: '₦ 45,450,000',
    },
    Lexus: {
        image: lexus,
        description: 'Lexus NX Hybrid',
        price: '₦ 65,450,000',
    },
    Benze: {
        image: benze,
        description: 'Mercedes-Benz C197 SLS AMG',
        price: '₦ 205,450,000',
    }
};


export default function Search() {
    const [selectedBrand, setSelectedBrand] = useState('');

   const handleChange = (e) => {
    setSelectedBrand(e.target.value);
   };

   const brandInfo = brandData[selectedBrand];

    return(
        <div>
            <input type="text" list="brand" id="car" placeholder="Search A Product"
             className={styles.search} 
             onChange={handleChange}
             />
  
            {/* <datalist id="brand">
                <option value="Toyota"></option>
                <option value="Honda"></option>
                <option value="Lexus"></option>
                <option value="Mercedes Benze"></option>
                <option value="Ferrari"></option>
            </datalist> */}

        <datalist id="brand">
         {Object.keys(brandData).map((brand) => (
            <option value={brand} key={brand} />
         ))}
            </datalist>
            {brandInfo && (
            <div className={styles.brandBox}>
            <h2>{selectedBrand}</h2>
            <img src={brandInfo.image} alt={selectedBrand} style={{width: '150px'}} />
            <p>{brandInfo.description}</p>
            <p>{brandInfo.price}</p>
         </div>
            )} 
        </div>
    );
}