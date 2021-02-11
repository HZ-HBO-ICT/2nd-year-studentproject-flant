import React, { useState } from 'react';
import productData from './ProductData';
import ProductCard from './ProductCard';

export default function Products() {
    const [products] = useState(productData);

    return (
        
            <div className="columns">
            {products.map((item) => (
                <ProductCard key={item.id} {...item} />
            ))}
       </div>
    )
}