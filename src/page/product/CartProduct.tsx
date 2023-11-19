import React from "react";
import { Cart } from "../../Model";
import CardProduct from "./CardProduct";

interface Props {
  cart: Cart[];
}

const CartProduct: React.FC<Props> = ({ cart }) => {
  return (
    <div>
      {cart.length != 0 && <h1 className="title">Cart</h1>}
      <div className="container-product cart">
        {cart.map((item) => (
          <CardProduct
            key={item.id}
            id={item.id}
            image={item.foto1}
            name={item.nama_produk}
            price={item.harga}
          />
        ))}
      </div>
    </div>
  );
};

export default CartProduct;
