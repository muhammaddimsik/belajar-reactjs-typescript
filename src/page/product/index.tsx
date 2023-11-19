import axios from "axios";
import React, { useEffect, useState } from "react";
import { Pagination, Product } from "../../Model";
import ProductList from "./ProductList";
import "./product.css";
import PaginationComponent from "./PaginationComponent";

const index: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [pagination, setPagination] = useState<Pagination>({
    current_page: 0,
    last_page: 0,
    perpage: 0,
    total: 0,
  });

  const getProduct = () => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/product `)
      .then((res) => {
        setProducts(res.data.data);
        setPagination(res.data.pagination);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const fetchData = async (page: number) => {
    await axios
      .get(`${import.meta.env.VITE_API_URL}/product?page=${page}`)
      .then((res) => {
        setProducts(res.data.data);
        setPagination(res.data.pagination);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const onPageChange = (page: number) => {
    fetchData(page);
  };

  const [isBottom, setIsBottom] = useState<boolean>(false);

  useEffect(() => {
    getProduct();

    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;

      const atBottom = scrollTop + clientHeight >= scrollHeight - 100;

      setIsBottom(atBottom);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [currentPage, setCurrentPage] = useState<number>(2);
  const autoLoad = async () => {
    setCurrentPage((prevPage) => prevPage + 1);
    await axios
      .get(`${import.meta.env.VITE_API_URL}/product?page=${currentPage}`)
      .then((res) => {
        setProducts((prevProducts) => [...prevProducts, ...res.data.data]);
        setPagination(res.data.pagination);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (isBottom) {
      autoLoad();
    }
  }, [isBottom]);

  return (
    <div>
      <h1 className="title">Product Page</h1>
      <ProductList products={products} />
      <PaginationComponent
        onPageChange={onPageChange}
        pagination={pagination}
      />
    </div>
  );
};

export default index;
