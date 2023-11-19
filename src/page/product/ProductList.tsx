import React from "react";
import CardProduct from "./CardProduct";
import { Product } from "../../Model";

interface Props {
  products: Product[];
  addCart: (
    id: number,
    foto1: string,
    nama_produk: string,
    harga: string
  ) => void;
}

const ProductList: React.FC<Props> = ({ products, addCart }) => {
  return (
    <>
      <h1 className="title">Product Page</h1>

      <div className="container-product">
        {products.map((item) => (
          <CardProduct
            key={item.id}
            id={item.id}
            image={item.foto1}
            name={item.nama_produk}
            price={
              item.varian && item.varian.length !== 0
                ? item.varian[0].harga
                : ""
            }
            addCart={addCart}
          />
        ))}
      </div>
    </>
  );
};

export default ProductList;
