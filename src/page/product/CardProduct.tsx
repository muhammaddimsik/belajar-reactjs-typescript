import React from "react";
import { formatRupiah } from "../../utils/FormatRupiah";

interface Props {
  image: string;
  name: string;
  price: string;
  id: number;
  addCart?: (
    id: number,
    foto1: string,
    nama_produk: string,
    harga: string
  ) => void;
}
const CardProduct: React.FC<Props> = ({ image, name, price, id, addCart }) => {
  return (
    <div
      className="card-product"
      onClick={() => {
        addCart !== undefined ? addCart(id, image, name, price) : null;
      }}
    >
      <img src={image} alt={name} className="image" />
      <div className="description">
        <p className="product-name line-2">{name}</p>
        <p className="product-price">{formatRupiah(parseInt(price))}</p>
      </div>
    </div>
  );
};

export default CardProduct;
