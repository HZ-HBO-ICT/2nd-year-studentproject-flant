import React from 'react'

export default function ProductCard({ id, url, price, discount, name, description, description1, alt }) {

    // const addToCart = () => {
    //     localStorage.clear();
    //     localStorage.setItem("Type", name);
    //     // console.log(localStorage);

    // }

    return (

        <div className="column">
            <div className="card is-rounded has-text-centered">
                <div className="card-image">
                    <figure className="image is-4by3">
                        <img src={url} alt="Placeholder image" />
                    </figure>
                </div>
                <div className="card-content product-card">

                    <div className="content">
                        <div className="title">
                            {name}
                </div>
                        <div className="subtitle">€ {price} {discount}</div>
                        <div className="subtitle has-text-left">
                           {description}
                        </div>
                        <div className="subtitle is-italic">
                           {description1}
                        </div>
                    </div>
                </div>
                <footer className="card-footer">
                    <div className="card-footer-item">
                        <a className="branding-button button is-warning has-text-white is-rounded" href={"/basket/" + id}>
                            buy now
                        </a>
                    </div>
                </footer>
            </div>
        </div>


        // <div className="column">
        //     <div className="card">
        //         <div className="card-image">
        //             <div className="is-overlay">
        //             </div>
        //             <figure className="image is-4by3">
        //                 <img alt={alt} src={url}></img>
        //             </figure>
        //         </div>
        //         <div className="card-content">
        //             <div className="content has-text-centered">
        //                 <h1 className="title is-pricing has-text-black">€{price}</h1>
        //                 <hr />
        //                 <p className="title has-text-black">{name}</p>
        //                 <p className="subtitle has-text-black">{description}</p>
        //                 <hr />
        //                 <a className="button is-success is-rounded has-text-white has-shadow"  href={"/basket/" + id}>Buy now</a>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    )
}
