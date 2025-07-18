import React from "react";
import ProductComponent from "../ProductComponent/ProductComponent";
import styles from "./ProductsSlider.module.css";

interface Product {
  url: string;
}

interface ProductsSliderProps {
  category: string;
  products: Product[];
}

const ProductsSlider: React.FC<ProductsSliderProps> = ({ category, products }) => {
  return (
    <div>
      <h2 className={styles.categoryTitle}>{category}</h2>
      <div className={styles.container}>
        {products.map((product) => (
          <ProductComponent
            key={product.url}
            url={product.url}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductsSlider;
