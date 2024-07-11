import classNames from "classnames";
import ShowBox from "../showbox/ShowBox";
import ThumbNail from "../thumbnail/ThumbNail";
import { useState } from "react";
import styles from "./ProductLightBox.module.css";

const products = [
  {
    id: self.crypto.randomUUID(),
    product: "./src/assets/images/Diablo4.webp",
    thumbNail: "./src/assets/images/Diablo4.webp",
  },
  {
    id: self.crypto.randomUUID(),
    product: "./src/assets/images/ps5.jpg",
    thumbNail: "./src/assets/images/ps5.jpg",
  },
  {
    id: self.crypto.randomUUID(),
    product: "./src/assets/images/inarius.jpg",
    thumbNail: "./src/assets/images/inarius.jpg",
  },
  {
    id: self.crypto.randomUUID(),
    product: "./src/assets/images/necromancer.webp",
    thumbNail: "./src/assets/images/necromancer.webp",
  },
];

function ProductLightBox() {
  const initialValue = products[0];
  const [selectedProduct, setSelectedProduct] = useState(initialValue);

  const handleClick = (id) => {
    const product = products.find((product) => product.id === id);
    setSelectedProduct(product);
  };

  return (
    <div className={classNames(styles["product-lightbox"])}>
      <ShowBox imgUrl={selectedProduct.product} />
      <ul className={classNames(styles["thumbnail-list"])}>
        {products.map((product) => {
          return (
            <li
              key={product.id}
              id={product.id}
              onClick={function () {
                handleClick(product.id);
              }}
            >
              <ThumbNail
                isSelected={product.id == selectedProduct.id}
                thumbNail={product.thumbNail}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ProductLightBox;