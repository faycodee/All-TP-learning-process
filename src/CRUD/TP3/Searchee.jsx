import { useState } from "react";
import List from "./List.jsx";
import { Chercher } from "./Chercher.jsx";
export default function Searchee() {
  const data = [
    { nom: "banane", type: "fruit" },
    { nom: "orange", type: "fruit" },
    { nom: "pomme", type: "fruit" },
    { nom: "raisins", type: "fruit" },
    { nom: "kiwi", type: "fruit" },
    { nom: "tomate", type: "legume" },
    { nom: "carotte", type: "legume" },
    { nom: "pomme de terre", type: "legume" },
    { nom: "navet", type: "legume" },
    { nom: "poivron", type: "legume" },
  ];
  const [stateS, setStateS] = useState(data);

  const chercherHandl = (cherText) => {
    alert(cherText);
    let vdata = data.filter((e) => {
      return e.type == cherText.toLowerCase();
    });
    setStateS(vdata);
  };

  return (
    <div className=" bg-green-300 p-[20px] border-[10px] border-blue-500 rounded-[35px] uuuuuuuu">
      <h1 className="text-center text-4xl">Composant</h1>
      <Chercher chercherHandl={chercherHandl} />

      <List stateS={stateS} />
    </div>
  );
}
