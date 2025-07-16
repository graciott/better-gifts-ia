import React from "react";
import styles from "./ProductComponent.module.css";

interface ProductComponentProps {
  title: string;
  image: string;
  price: number;
  onAddToCart: () => void;
}

const ProductComponent: React.FC<ProductComponentProps> = ({
  title,
  image,
  price,
  onAddToCart,
}) => {
  return (
    <div className={styles.productCard}>
      <img
        src={
          "https://yt3.ggpht.com/ytc/AIdro_l2dYLob_k5biaqXR_dOPX6yOtT1PPOo4l4fw5-NaPe-A=s88-c-k-c0x00ffffff-no-rj"
        }
        alt={title}
        className={styles.productImage}
      />
      <div>
        <h3 className={styles.productTitle}>{title}</h3>
        <p className={styles.productPrice}>${price.toFixed(2)}</p>
        <button className={styles.addToCartButton} onClick={onAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductComponent;
