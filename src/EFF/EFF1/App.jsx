import { useState } from "react";

function Materiel() {
  const [data, setData] = useState({
    materiel: [
      {
        code: 0,
        marque: "Hp",
        date: "20/02/2024",
        categorie: "Categorie 1 ",
      },
    ],
  });
  return (
    <div>
      <form>
        <fieldset>
          <h2>Gestion Materiel</h2>
          Code Materiel :
          <input type="number" />
          Marque :
          <select name="" id="">
            <option value="Hp">Hp</option>
            <option value="lenovo">lenovo</option>
            <option value="dell">dell</option>
          </select>
          Date debut utilisation :
          <input type="date" />
          Category :
          <input type="text" />
        </fieldset>
        <button>Confirmer</button>
        <h1>Recapitulatif des information :</h1>
        <ul>
           
            <li>{data.materiel.code}</li>;
            <li>{data.materiel.marque}</li>;
            <li>{data.materiel.date}</li>;
            <li>{data.materiel.categorie}</li>;
        
        </ul>
      </form>
    </div>
  );
}

export default Materiel;
