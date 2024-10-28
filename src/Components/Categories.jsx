import React from "react";
import Cards from "./Cards";

export default function Categories() {
  const [data, setData] = React.useState([
    {
      id: 1,
      title: "Essence Mascara Lash Princess",
      description:
        "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
      category: "beauty",
      price: 9.99,
      discountPercentage: 7.17,
      rating: 4.94,
      stock: 5,
      tags: ["beauty", "mascara"],
      brand: "Essence",
      sku: "RCH45Q1A",
      weight: 2,
      dimensions: {
        width: 23.17,
        height: 14.43,
        depth: 28.01,
      },
      warrantyInformation: "1 month warranty",
      shippingInformation: "Ships in 1 month",
      availabilityStatus: "Low Stock",
      reviews: [
        {
          rating: 2,
          comment: "Very unhappy with my purchase!",
          date: "2024-05-23T08:56:21.618Z",
          reviewerName: "John Doe",
          reviewerEmail: "john.doe@x.dummyjson.com",
        },
        {
          rating: 2,
          comment: "Not as described!",
          date: "2024-05-23T08:56:21.618Z",
          reviewerName: "Nolan Gonzalez",
          reviewerEmail: "nolan.gonzalez@x.dummyjson.com",
        },
        {
          rating: 5,
          comment: "Very satisfied!",
          date: "2024-05-23T08:56:21.618Z",
          reviewerName: "Scarlett Wright",
          reviewerEmail: "scarlett.wright@x.dummyjson.com",
        },
      ],
      returnPolicy: "30 days return policy",
      minimumOrderQuantity: 24,
      meta: {
        createdAt: "2024-05-23T08:56:21.618Z",
        updatedAt: "2024-05-23T08:56:21.618Z",
        barcode: "9164035109868",
        qrCode: "https://assets.dummyjson.com/public/qr-code.png",
      },
      images: [
        "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png",
    },
    {
      id: 10,
      title: "Gucci Bloom Eau de",
      description:
        "Gucci Bloom by Gucci is a floral and captivating fragrance, with notes of tuberose, jasmine, and Rangoon creeper. It's a modern and romantic scent.",
      category: "fragrances",
      price: 79.99,
      discountPercentage: 8.9,
      rating: 2.69,
      stock: 93,
      tags: ["fragrances", "perfumes"],
      brand: "Gucci",
      sku: "FFKZ6HOF",
      weight: 10,
      dimensions: { width: 22.28, height: 17.81, depth: 27.18 },
      warrantyInformation: "No warranty",
      shippingInformation: "Ships in 2 weeks",
      availabilityStatus: "In Stock",
      reviews: [
        {
          rating: 5,
          comment: "Great value for money!",
          date: "2024-05-23T08:56:21.620Z",
          reviewerName: "Aria Parker",
          reviewerEmail: "aria.parker@x.dummyjson.com",
        },
        {
          rating: 4,
          comment: "Excellent quality!",
          date: "2024-05-23T08:56:21.620Z",
          reviewerName: "Natalie Harris",
          reviewerEmail: "natalie.harris@x.dummyjson.com",
        },
        {
          rating: 4,
          comment: "Fast shipping!",
          date: "2024-05-23T08:56:21.620Z",
          reviewerName: "Ava Harris",
          reviewerEmail: "ava.harris@x.dummyjson.com",
        },
      ],
      returnPolicy: "No return policy",
      minimumOrderQuantity: 10,
      meta: {
        createdAt: "2024-05-23T08:56:21.620Z",
        updatedAt: "2024-05-23T08:56:21.620Z",
        barcode: "8232190382069",
        qrCode: "https://assets.dummyjson.com/public/qr-code.png",
      },
      images: [
        "https://cdn.dummyjson.com/products/images/fragrances/Gucci%20Bloom%20Eau%20de/1.png",
        "https://cdn.dummyjson.com/products/images/fragrances/Gucci%20Bloom%20Eau%20de/2.png",
        "https://cdn.dummyjson.com/products/images/fragrances/Gucci%20Bloom%20Eau%20de/3.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/fragrances/Gucci%20Bloom%20Eau%20de/thumbnail.png",
    },
    {
      id: 15,
      title: "Wooden Bathroom Sink With Mirror",
      description:
        "The Wooden Bathroom Sink with Mirror is a unique and stylish addition to your bathroom, featuring a wooden sink countertop and a matching mirror.",
      category: "furniture",
      price: 799.99,
      discountPercentage: 11.22,
      rating: 3.26,
      stock: 95,
      tags: ["furniture", "bathroom"],
      brand: "Bath Trends",
      sku: "7OLTIEVO",
      weight: 6,
      dimensions: { width: 7.32, height: 22.64, depth: 12.37 },
      warrantyInformation: "6 months warranty",
      shippingInformation: "Ships in 3-5 business days",
      availabilityStatus: "In Stock",
      reviews: [
        {
          rating: 5,
          comment: "Highly recommended!",
          date: "2024-05-23T08:56:21.620Z",
          reviewerName: "Charlotte Lopez",
          reviewerEmail: "charlotte.lopez@x.dummyjson.com",
        },
        {
          rating: 1,
          comment: "Would not recommend!",
          date: "2024-05-23T08:56:21.620Z",
          reviewerName: "William Gonzalez",
          reviewerEmail: "william.gonzalez@x.dummyjson.com",
        },
        {
          rating: 2,
          comment: "Not worth the price!",
          date: "2024-05-23T08:56:21.620Z",
          reviewerName: "Ava Harrison",
          reviewerEmail: "ava.harrison@x.dummyjson.com",
        },
      ],
      returnPolicy: "7 days return policy",
      minimumOrderQuantity: 1,
      meta: {
        createdAt: "2024-05-23T08:56:21.620Z",
        updatedAt: "2024-05-23T08:56:21.620Z",
        barcode: "7839797529453",
        qrCode: "https://assets.dummyjson.com/public/qr-code.png",
      },
      images: [
        "https://cdn.dummyjson.com/products/images/furniture/Wooden%20Bathroom%20Sink%20With%20Mirror/1.png",
        "https://cdn.dummyjson.com/products/images/furniture/Wooden%20Bathroom%20Sink%20With%20Mirror/2.png",
        "https://cdn.dummyjson.com/products/images/furniture/Wooden%20Bathroom%20Sink%20With%20Mirror/3.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/furniture/Wooden%20Bathroom%20Sink%20With%20Mirror/thumbnail.png",
    },
  ]);
  return (
    <div className="categoryContainer">
      <h1 className="catgoryHeading">CATEGORIES TO CART</h1>
      <Cards data={data} />
    </div>
  );
}
