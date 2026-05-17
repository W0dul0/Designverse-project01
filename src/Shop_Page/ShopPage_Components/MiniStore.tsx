import './MiniStore.css'

export function MiniStore() {
  return (
    <div id="MiniStore">
      <h2>Discounted Baked Goods</h2>

      <div className="mini-item">
        <img src="/bread1.png" />
        <div>
          <h3>Sourdough Loaf</h3>
          <p className="price">$2.49</p>
        </div>
      </div>

      <div className="mini-item">
        <img src="/croissant.png" />
        <div>
          <h3>Butter Croissant</h3>
          <p className="price">$1.19</p>
        </div>
      </div>

      <div className="mini-item">
        <img src="/baguette.png" />
        <div>
          <h3>French Baguette</h3>
          <p className="price">$1.79</p>
        </div>
      </div>
    </div>
  );
}

