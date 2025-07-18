import ProductsSlider from "../../components/ProductsSlider/ProductsSlider";
import { categoriesAndProducts } from "../../utils/static-db";
import ChatScreen from "../Chat/ChatScreen";
import styles from "./ShoppingAiScreen.module.css";

const ShoppingAiScreen = () => {
  return (
    <div className={styles.mainWrapper}>
      <div className={styles.chatSection}>
        <ChatScreen />
      </div>
      <div className={styles.container}>
        <h1>Shopping AI Screen</h1>
        {categoriesAndProducts.map((category) => (
          <div className={styles.category} key={category.title}>
            <ProductsSlider
              category={category.title}
              products={category.products}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShoppingAiScreen;
