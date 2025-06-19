"use client"

import React from "react"
import ProductCard from "./ProductCard"

interface Product {
  id: number
  name: string
  description: string
  price: string
  imageUrl: string
}

interface ProductListProps {
  products: Product[]
  onAddToCart?: (id: number) => void
}

export default function ProductList({ products, onAddToCart }: ProductListProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          name={product.name}
          description={product.description}
          price={product.price}
          imageUrl={product.imageUrl}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  )
}
