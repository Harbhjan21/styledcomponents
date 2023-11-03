import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

const ProductList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 50px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ProductItem = styled.div`
  box-sizing: content-box;
  border: 1px solid #ccc;
  padding: 16px;
  margin: 16px;
  width: 300px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
`;

const Button = styled.button`
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: white;

  &:hover {
    background-color: black;
    color: white;
  }
`;
const Div = styled.div`
  margin: 10px;
  display: flex;
  justify-content: space-between;
`;

const Home = () => {
  const { state } = useLocation();
  console.log("props", state);

  const [products, setproducts] = useState([]);
  const [productpages, setproductspages] = useState([]);
  const [currentpage, setcurrentpage] = useState(1);

  const pageitems = 5;

  useEffect(() => {
    setcurrentpage(1);
    var API = "https://dummyjson.com/products";
    if (state?.category != "home") {
      API += `/category/${state.category}`;
    }
    const fetch = async () => {
      axios
        .get(API)
        .then((response) => {
          console.log(response);

          setproducts(response.data.products);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetch();
  }, [state]);
  useEffect(() => {
    const end = currentpage * pageitems;
    const start = end - pageitems;
    const sliceproducts = products.slice(start, end);
    setproductspages(sliceproducts);
  }, [currentpage, products]);
  return (
    <>
      {productpages.length == 0 ? (
        <div class="spinner-border " style={{ margin: 80 }} role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      ) : (
        <>
          <ProductList>
            {productpages.length > 0 &&
              productpages.map((product, index) => (
                <ProductItem key={index}>
                  <Image
                    src={product.images[product.images.length - 1]}
                    alt={product.title}
                  />
                  <h3>{product.title}</h3>
                  <p>{product.description}</p>
                  <p>Price: ${product.price}</p>
                </ProductItem>
              ))}
          </ProductList>
          <Div>
            <Button
              onClick={() => {
                setcurrentpage(currentpage - 1);
              }}
              disabled={currentpage == 1}
            >
              Prev
            </Button>
            <Button
              onClick={() => {
                setcurrentpage(currentpage + 1);
              }}
              disabled={currentpage == products.length / pageitems}
            >
              Next
            </Button>
          </Div>
        </>
      )}
    </>
  );
};

export default Home;
