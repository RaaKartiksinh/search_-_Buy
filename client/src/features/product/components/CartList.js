import React, { useContext, useEffect, useState } from "react";
import "./Cart.css";
import { Link } from "react-router-dom";

export default function CartList({ product, isLiked = false, user }) {
  const [linkPath, setLinkPath] = useState("##");

  return (
    <Link to={`/product-detail/${product.id}`}>
      <div className="product-card">
        <div className="product-tumb">
          <img src={product.thumbnail} alt="" />
        </div>
        <div className="product-details">
          <span className="product-catagory">{product.category}</span>
          <h4>{product.title}</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero,
            possimus nostrum!
          </p>
          <div className="product-bottom-details">
            <div className="product-price">
              <small> {product.price}</small>
              {product.discountPrice}
            </div>

            <div className="product-links">
              {/* <Link to={"#"}>
                  <i className="bi bi-cart-check-fill"></i>
                </Link>

                <Link to={linkPath}>
                  {isLiked ?
                    (<i className="bi bi-heart-fill" style={{ color: "#ff7089" }}></i>)
                    : (<i className='bi bi-heart'> </i>)
                  }
                </Link> */}
            </div>

            {user?.role === "admin" && (
              <Link
                to={`/admin/product-form/edit/${product.id}`}
                className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Edit Product
              </Link>
            )}

            {user?.role === "admin" && product?.deleted && (
              <p className="text-red-500">Product deleted</p>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
