import Item from "./Item";

const arr = [
  {
    src: "item.png",
    title: "Borevali",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, nobis!",
  },
  {
    src: "item.png",
    title: "Kandevali",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, nobis!",
  },
  {
    src: "item.png",
    title: "Thane",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, nobis!",
  },
  {
    src: "item.png",
    title: "Thane",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, nobis!",
  },
  {
    src: "item.png",
    title: "Thane",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, nobis!",
  },
  {
    src: "item.png",
    title: "Thane",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, nobis!",
  },
  {
    src: "item.png",
    title: "Thane",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, nobis!",
  },
  {
    src: "item.png",
    title: "Thane",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, nobis!",
  },
];

const Shop = () => {
  return (
    <div className="shop-container">
      {arr.map((i) => (
        <Item src={i.src} title={i.title} body={i.body} />
      ))}
    </div>
  );
};

export default Shop;
