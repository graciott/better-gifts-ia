import React, { useEffect, useState } from "react";
import styles from "./ProductComponent.module.css";

interface ProductComponentProps {
  url: string;
}

interface Metadata {
  title?: string;
  image?: { url?: string };
  price?: string;
  logo?: { url?: string };
}

const ProductComponent: React.FC<ProductComponentProps> = ({ url }) => {
  const [metadata, setMetadata] = useState<Metadata | null>(null);
  const [loading, setLoading] = useState(true);

  const { title, image, price, logo: store } = metadata || {};
  const { url: storeImage } = store || {};

  useEffect(() => {
    const fetchMetadata = async () => {
      try {
        const response = await fetch(
          `https://api.microlink.io/?url=${encodeURIComponent(url)}`
        );
        const data = await response.json();

        if (data.status === "success") {
          setMetadata(data.data);
        } else {
          console.warn("Falha ao obter metadados");
        }
      } catch (err) {
        console.error("Erro na API Microlink:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchMetadata();
  }, [url]);

  const onBuyProduct = () => {
    window.open(url, "_blank");
  };

  if (loading) return <p>Carregando...</p>;
  if (!metadata) return <p>Não foi possível obter os dados.</p>;

  console.log("Product metadata:", metadata);
  return (
    <div className={styles.productCard}>
      <img
        src={image?.url || "/placeholder.png"}
        alt={title || "Product Image"}
        className={styles.productImage}
      />
      <div>
        <h3 className={styles.productTitle}>{title}</h3>
        <p className={styles.productPrice}>{price}</p>
        <button className={styles.addToCartButton} onClick={onBuyProduct}>
          Comprar
          <img
            src={storeImage || "/placeholder.png"}
            alt={title || "Product Image"}
            className={styles.storeImage}
          />
        </button>
      </div>
    </div>
  );
};

export default ProductComponent;
