import React from "react";
import ProductComponent from "../ProductComponent/ProductComponent";
import styles from "./ProductsSlider.module.css";

interface Category {
  title: string;
  products: Product[];
}

interface Product {
  id: number;
  title: string;
  image: string;
  price: number;
}

interface ProductsSliderProps {
  category: Category;
}

const ProductsSlider: React.FC<ProductsSliderProps> = ({ category }) => {
  return (
    <div>
      <h2 className={styles.categoryTitle}>{category.title}</h2>
      <div className={styles.container}>
        {category.products.map((product) => (
          <ProductComponent
            key={product.id}
            title={product.title}
            image={product.image}
            price={product.price}
            onAddToCart={() => console.log(`Added ${product.title} to cart`)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductsSlider;
