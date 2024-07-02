import { Link } from "react-router-dom";

export function Cards_login() {
  return (
    <div className="cards-container">
      <div className="card">
        <div className="content">
          <h3>Our Mission</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            quidem nam minima porro officia pariatur sed qui necessitatibus vero
            nesciunt quis modi, magnam quibusdam cumque aliquam aperiam harum
            obcaecati unde.
          </p>
        </div>
        <img src="bicycle.jpg" alt="" />
      </div>
      <div className="card">
        <img src="baloon.jpg" alt="" />
        <div className="content">
          <h3>Eco-route your deliveries</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo, nisi
            molestiae ipsam placeat possimus earum quibusdam quasi dolor quae
            tenetur, perspiciatis, voluptates nobis a veritatis. Expedita qui
            repudiandae perferendis maiores.
          </p>
        </div>
      </div>
      <div className="card">
        <div className="content">
          <h3>Shop Sustainably</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo,
            laborum. Nostrum, velit reprehenderit ut dolorem ratione fugiat iure
            omnis soluta voluptate quas earum neque mollitia voluptatum maxime
            est assumenda. Autem.
          </p>
        </div>
        <img src="doorstep.jpg" alt="" />
      </div>
      <img src="road.png" alt="" className="road" />
    </div>
  );
}

export function Cards_dashboard() {
  return (
    <div className="cards-container-dashboard">
      <div className="card-dash">
        <img src="map-pin.jpg" alt="" />
        <div className="content">
          <p className="bold">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            quidem nam minima porro officia pariatur sed qui necessitatibus vero
            nesciunt quis modi, magnam quibusdam cumque aliquam aperiam harum
            obcaecati unde.
          </p>
          <Link to="/map"><button>Search for Routes</button></Link>
        </div>
      </div>
      <div className="card-dash">
        <div className="content bold">
          <p className="bold">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo,
            laborum. Nostrum, velit reprehenderit ut dolorem ratione fugiat iure
            omnis soluta voluptate quas earum neque mollitia voluptatum maxime
            est assumenda. Autem.
          </p>
          <Link to="/shop"><button>Buy Bags</button></Link>
        </div>
        <img src="shop-bag.jpg" alt="" />
      </div>
    </div>
  );
}
