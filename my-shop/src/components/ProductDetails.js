import React, {useContext} from 'react';
import { Link,useParams } from 'react-router-dom';

// Context
import { productsContext } from "../Context/ProductsContextProvider";

// Style
import styles from "./ProductDetails.module.css";

const ProductDetails = (props) => {

    const params = useParams();
    const data = useContext(productsContext);
    const product = data[params.id - 1];
    
    const { image, title, description, price, category } = product;
    console.log(price)

    return (
        <div className={styles.container}>
            <img className={styles.image} src={image} alt="product" />
            <div className={styles.textContainer}>
                <h3>{title}</h3>
                <p className={styles.description}>{description}</p>
                <p className={styles.category}><span>Category:</span> {category}</p>
                <div className={styles.buttonContainer}>
                    <span className={styles.price}>{price} $</span>
                    <Link to="/products">Back to Shop</Link>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;