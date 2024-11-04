export default Products
const products = [
  {
    id: 1,
    title: "PC Portable Gamer HP VICTUS",
    price: "7490 DH",
    thumbnail: "HP16D0195NF.jpg",
  },
  {
    id: 2,
    title: "PC Portable Gamer HP VICTUS",
    price: "2190 DH",
    thumbnail: "HP14424U3EA.jpg",
  },
  {
    id: 3,
    title: "Pc Portable Chromebook Acer",
    price: "3640 DH",
    thumbnail: "NXATHEF002.jpg",
  },
  {
    id: 4,
    title: "PC Portable - HUAWEI",
    price: "1270 DH",
    thumbnail: "HUA6901443442959.jpg",
  },
];
function Products() {
  return (<div className="contianer">
    {products.map((p,i)=> <Product key={i} pos={i} data={p}/>) }
  </div>);
}
function Product(props) {
    return (
    <div className="col">
<div className="card shadow-sm">
<img className="bd-placeholder-img card-img-top"
src={props.data.thumbnail+props.pos} alt="" />
<div className="card-body">
<p className="card-title">{props.data.title}</p>
<p className="card-text">{props.data.price}</p>
<div className="d-flex justify-content-between alignitems-center">
<div className="btn-group">
<button type="button" className="btn btn-sm btnoutline-secondary">Ajouter au panier</button>
</div>
</div>
</div>
</div>
</div>
)
}
