import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  NavLink,
  useParams,
} from "react-router-dom";
import "./App.css";
import { useRef, useState } from "react";

function App() {
  const [isLogen, setIsLogen] = useState(false);
  const [data, setData] = useState({
    db: [
      {
        code: "p01",
        desg: "PC de bureau dell",
        qteS: 20,
        marque: "dell",
        pu: 5000,
        img: "pc1.png",
      },
      {
        code: "p02",
        desg: "PC de bureau hp",
        qteS: 20,
        marque: "hp",
        pu: 6000,
        img: "pc2.png",
      },
      {
        code: "p03",
        desg: "PC de bureau Lenovo",
        qteS: 20,
        marque: "Lenovo",
        pu: 5000,
        img: "pc3.png",
      },
    ],
    panierDb: [],
  });
  const ajouterProPan = (code, qte, stock) => {
    let objIndx = data.panierDb.findIndex((p) => p.code === code);
    let obj = data.panierDb.find((p) => p.code === code);
    if (stock >= qte) {
      if (obj) {
        data.panierDb.forEach((e) =>
          e.code === code ? (e.qte = parseInt(e.qte) + parseInt(qte)) : ""
        );
        //  let tab = [...data.panierDb.splice(objIndx,1,)]
        setData({
          ...data,
        });
        alert("Quantity modify avec success");
      } else {
        let produit = data.db.find((e) => e.code === code);
        setData({
          ...data,
          panierDb: [...data.panierDb, { ...produit, qte }],
        });
        // console.log(produit);
        console.log(data.panierDb);

        alert("ajouter success");
      }
    } else {
      alert("Quantity est plus grand a stock !!");
    }
  };

  return (
    <BrowserRouter>
      <div className="app">
        <header>
          <NavBar isLogen={isLogen} />
        </header>
        <section>
          <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/contact" element={<Contact />} />

            {isLogen && (
              <Route path="/produits">
                <Route index element={<Produits data={data.db} />} />
                <Route
                  path="produit/:code"
                  element={
                    <Produit data={data.db} ajouterProPan={ajouterProPan} />
                  }
                />
              </Route>
            )}

            <Route
              path="/panier"
              element={<Panier panierDb={data.panierDb} />}
            />
            <Route path="/login" element={<Login panierDb={data.panierDb} />} />
          </Routes>
        </section>
      </div>
    </BrowserRouter>
  );
}

function NavBar({isLogen}) {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Accueil</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contactez-nous</NavLink>
        </li>
      {  isLogen && (
        <>
          <li>
          <NavLink to="/produits">Nos-Produits</NavLink>
        </li>
        <li>
          <NavLink to="/panier">Panier</NavLink>
        </li>
        </>
        )}
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
      </ul>
    </nav>
  );
}

function Accueil() {
  return <h1>Page d'accueil</h1>;
}

function Contact() {
  return <h1>Page Contactez-nous</h1>;
}
function Produits({ data }) {
  return (
    <>
      <h1> Liste des produits </h1>
      <table className="table">
        <thead>
          <tr>
            <th>Code</th>
            <th>desg</th>
            <th>image</th>
            <th>Détails</th>
          </tr>
        </thead>
        <tbody>
          {data.map((pr, i) => (
            <tr key={i}>
              <th>{pr.code}</th>
              <td>{pr.desg}</td>
              <td>
                <img src={"/img/" + pr.img} alt={pr.desg} />
              </td>
              <td>
                <Link to={"produit/" + pr.code}>détails</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

function Produit({ data, ajouterProPan }) {
  let { code } = useParams();
  let pr = data.find((p) => p.code === code);
  const qte = useRef();
  return (
    <>
      <h1>Détails produit {code} :</h1>

      <div className="card" style={{ width: "18rem", height: "20rem" }}>
        <img className="card-img-top" src={"/img/" + pr.img} alt={pr.desg} />
        <div className="card-body">
          <h3 className="card-title">{pr.desg}</h3>
          <p className="card-text">
            Marque : {pr.marque} <br />
            Prix Unitaire : {pr.pu} <br />
            Quantité en stock : {pr.qteS} <br />
            Quantité :{" "}
            <input
              type="number"
              ref={qte}
              className="bg-slate-300 rounded-2xl"
            />{" "}
            <br />
            <input
              className="btn btn-outline-secondary"
              onClick={() => ajouterProPan(pr.code, qte.current.value, pr.qteS)}
              type="button"
              value="Ajouter au panier"
            />
          </p>
        </div>
      </div>
      <Link to="/produits">Retour</Link>
    </>
  );
}
function Panier({ panierDb }) {
  return (
    <>
      <h1> Liste des produits dans Panier</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Code</th>
            <th>desg</th>
            <th>image</th>
            <th> Marque </th>
            <th>Prix Unitaire :</th>
            <th> Quantité dans stock</th>
            <th> Quantité </th>
            <th>Prix Total </th>
          </tr>
        </thead>
        <tbody>
          {panierDb.map((pr, i) => (
            <tr key={i}>
              <th>{pr.code}</th>
              <td>{pr.desg}</td>
              <td>
                <img src={"/img/" + pr.img} alt={pr.desg} srcset="" />
              </td>
              <td>{pr.marque}</td>
              <td>{pr.pu}</td>
              <td>{pr.qteS}</td>
              <td>{pr.qte}</td>
              <td>{pr.qte * pr.pu}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
function Login() {
  return (
    <div className="flex justify-center mt-[120px] bg-slate-200 h-[400px] rounded-[60px] items-center">
      <fieldset>
        <legend>Login :</legend>
        <table>
          <tr key="1">
            <td >username :</td>
            <td>
              <input placeholder="root" type="text" />
            </td>
          </tr>
          <tr key="2">
            <td>password :</td>
            <td>
              <input placeholder="1234" type="password" />
            </td>
          </tr>
        </table>
        <button>Login</button>
      </fieldset>
    </div>
  );
}
export default App;
