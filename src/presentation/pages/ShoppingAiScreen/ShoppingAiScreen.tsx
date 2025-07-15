import ProductsSlider from "../../components/ProductsSlider/ProductsSlider";
import ChatScreen from "../Chat/ChatScreen";
import styles from "./ShoppingAiScreen.module.css";

const ShoppingAiScreen = () => {
  const categories = [
    {
      title: "Electronics",
      products: [
        { id: 1, title: "Smartphone", image: "smartphone.jpg", price: 699 },
        { id: 1, title: "Smartphone", image: "smartphone.jpg", price: 699 },
        { id: 1, title: "Smartphone", image: "smartphone.jpg", price: 699 },
        { id: 1, title: "Smartphone", image: "smartphone.jpg", price: 699 },
        { id: 1, title: "Smartphone", image: "smartphone.jpg", price: 699 },
        { id: 1, title: "Smartphone", image: "smartphone.jpg", price: 699 },
        { id: 2, title: "Laptop", image: "laptop.jpg", price: 999 },
        { id: 2, title: "Laptop", image: "laptop.jpg", price: 999 },
        { id: 2, title: "Laptop", image: "laptop.jpg", price: 999 },
        { id: 2, title: "Laptop", image: "laptop.jpg", price: 999 },
        { id: 2, title: "Laptop", image: "laptop.jpg", price: 999 },
        { id: 2, title: "Laptop", image: "laptop.jpg", price: 999 },
        { id: 2, title: "Laptop", image: "laptop.jpg", price: 999 },
      ],
    },
    {
      title: "Home Appliances",
      products: [
        {
          id: 3,
          title: "Refrigerator",
          image: "refrigerator.jpg",
          price: 1200,
        },
        {
          id: 3,
          title: "Refrigerator",
          image: "refrigerator.jpg",
          price: 1200,
        },
        {
          id: 3,
          title: "Refrigerator",
          image: "refrigerator.jpg",
          price: 1200,
        },
        {
          id: 3,
          title: "Refrigerator",
          image: "refrigerator.jpg",
          price: 1200,
        },
        {
          id: 3,
          title: "Refrigerator",
          image: "refrigerator.jpg",
          price: 1200,
        },
        {
          id: 4,
          title: "Washing Machine",
          image: "washing_machine.jpg",
          price: 800,
        },
      ],
    },
  ];

  return (
    <div className={styles.mainWrapper}>
      <div className={styles.chatSection}>
        <ChatScreen />
      </div>
      <div className={styles.container}>
        {categories.map((category) => (
          <div className={styles.category} key={category.title}>
            <ProductsSlider category={category} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShoppingAiScreen;
