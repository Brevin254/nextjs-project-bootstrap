"use client"

import React from "react"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"

interface ProductCardProps {
  id: number
  name: string
  description: string
  price: string
  imageUrl: string
  onAddToCart?: (id: number) => void
}

export default function ProductCard({
  id,
  name,
  description,
  price,
  imageUrl,
  onAddToCart,
}: ProductCardProps) {
  return (
    <Card className="hover:shadow-lg transition-shadow duration-300">
      <img
        src={imageUrl}
        alt={name}
        className="w-full h-48 object-cover rounded-t-xl"
      />
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-lg font-semibold">{price}</p>
      </CardContent>
      <CardFooter>
        <button
          onClick={() => onAddToCart && onAddToCart(id)}
          className="ml-auto bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition"
        >
          Add to Cart
        </button>
      </CardFooter>
    </Card>
  )
}
