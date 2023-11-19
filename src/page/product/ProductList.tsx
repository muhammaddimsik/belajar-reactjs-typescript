import React from "react";
import CardProduct from "./CardProduct";
import { Product } from "../../Model";

interface Props {
  products: Product[];
}

const ProductList: React.FC<Props> = ({ products }) => {
  return (
    <div className="container-product">
      {products.map((item) => (
        <CardProduct
          key={item.id}
          image={item.foto1}
          name={item.nama_produk}
          price={
            item.varian && item.varian.length !== 0 ? item.varian[0].harga : ""
          }
        />
      ))}
    </div>
  );
};

export default ProductList;
