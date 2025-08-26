import "./Cards.css";
import { boloDePote } from "../data/produtos";

export default function Cards(){
    return(
      <section className="cards-section">
        <h1 className="cards-title">BOLOS DE POTE</h1>
        <main className="cards-container">
              {boloDePote.map((product, index)=>(
                <div key={index} className="card">
                    <div className="card-image-wrapper">
                        <img className="card-image" src={product.image} alt={product.title} />
                    </div>
                    <div className="card-content">
                        <div>
                            <h3 className="card-title">{product.title}</h3>
                            <p className="card-description"> {product.description}</p>
                        </div>
                        <button className="card-button"> Comprar: {product.price}</button>
                    </div>
                </div>
              ))}
        </main>
      </section>
    );
}
