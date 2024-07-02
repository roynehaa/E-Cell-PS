const Item = ({ src, title, body }) => {
  return (
    <div className="item">
      <img src={src} alt="" />
      <div id="rel">
        <div>
          <h3>{title}</h3>
          <p>Small,Medium,Large</p>
        </div>
        <p>{body}</p>
        <button>Buy</button>
      </div>
    </div>
  );
};

export default Item;
