import React, { useState } from 'react'
import { setSyntheticTrailingComments } from 'typescript';
import productData from './ProductData';
import ProductCard from './ProductCard';

export default function Shoppingcart() {



    // Dropdown menu of 10
    const amount = Array.from({ length: 10 }, (_, i) => i + 1);
    const options = [];

    // Prints all 10 options
    for (const [index, value] of amount.entries()) {
        options.push(
            <option className="dropdown-item" key={index}>{value}</option>
        )
    }

    const updatePrice = () => {
        const price = products[id].price
        const amount = parseInt(document.getElementById("amount").value)
        const total = (price * amount).toFixed(2)
        document.getElementById("total").innerText = total
        console.log(total, amount, price)
    }
    const [eersteslash, route, id] = window.location.pathname.split("/")
    const [products] = useState(productData);

    console.log(products[id]);
    console.log(parseInt(window.location.pathname.slice(8)));

    return (
        <section className="section">
            <div className="container" style={{ marginTop: "5rem" }}>
                <div className="columns is-centered">
                    <h1 className="title is-1 is-centered">Basket</h1>
                </div>
                <div className="columns is-centered">
                            <div className="column">
                                <h2 className="subtitle is-2 has-text-centered">{products[id].name}</h2>
                            </div>
                            <div className="column">
                                <h2 className="subtitle is-2 is-size-4 has-text-centered">Order now and receive it tomorrow</h2>
                            </div>
                            <div className="column is-narrow dropdown">
                                <select className="dropdown-content" onChange={updatePrice} id="amount">
                                    {options}
                                </select>
                            </div>
                            <div className="column is-narrow">
                                <h2 className="subtitle is-2" id="price">€
                                    <span id="total">
                                        {products[id].price}
                                    </span>
                                </h2>
                            </div>
                            <div className="column is-one-fifth"></div>
                        </div>
                <div className="columns is-centered">
                    <div className="column"></div>
                    <div className="column is-one-fifth"><a className="button is-primary has-text-white is-rounded" href="/order">order now</a></div>
                </div>
            </div>
        </section>
    )
}
