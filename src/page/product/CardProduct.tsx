import React from "react";
import { formatRupiah } from "../../utils/FormatRupiah";

interface Props {
  image: string;
  name: string;
  price: string;
}
const CardProduct: React.FC<Props> = ({ image, name, price }) => {
  return (
    <div className="card-product">
      <img src={image} alt={name} className="image" />
      <div className="description">
        <p className="product-name line-2">{name}</p>
        <p className="product-price">{formatRupiah(parseInt(price))}</p>
      </div>
    </div>
  );
};

export default CardProduct;
