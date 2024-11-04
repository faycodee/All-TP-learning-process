import { Component } from "react";

export default class Ex1 extends Component {
  static id = 0;
  state = { t: [] };

  render() {
    return (
      <main className="h-[100vh] flex justify-center flex-col items-center py-9 bg-blue-100">
        <h1 className="text-3xl relative bottom-40 font-mono font-extrabold">
          Ajouter des Clients
        </h1>

        <div className="flex flex-col mb-[40px] mr-4   ">
          Nome:
          <input
            id="nom"
            type="text"
            className="w-[650px] mr-4 max-md:w-[350px]"
          />
          Ville
          <select id="ville">
            <option value="casa" key="">casa</option>
            <option value="fes" key="">fes</option>
            <option value="rabat" key="">rabat</option>
          </select>
          Age:
          <input id="age" type="number" />
          Date Naissance :
          <input type="date" name="" id="date" />
          Genre:
          <div>
            Homme:
            <input
              type="radio"
              name="genre"
              value="Homme"
              className="genre mx-2"
            />
            Femme :
            <input
              type="radio"
              name="genre"
              value="Femme"
              className="genre mx-2"
            />
          </div>
          Interert :
          <div>
            Sport:
            <input type="checkbox" value="Sport" className=" Interert mx-2" />
            internet :
            <input type="checkbox" value="internet" className=" Interert mx-2" />
            Voyage :
            <input type="checkbox" value="Voyage" className=" Interert mx-2" />
          </div>
        </div>
        <div></div>
        <button
          onClick={() => this.changeH1()}
          className="bg-slate-400 py-2 px-4 rounded-lg text-white hover:bg-slate-600 mb-[60px] "
        >
          Ajouter Client
        </button>
        <div>
          <h2 className="translate-x-[-15vw]">Liste des Clients :</h2>
          <table className="">
            <thead className="">
              <tr>
                <th className="text-center px-4 ">Id</th>
                <th className=" text-center px-4 " >Nome </th>
                <th className=" text-center px-4 " >Ville </th>
                <th className=" text-center px-4 " >Age</th>
                <th className=" text-center px-4 " >Date</th>
                <th className=" text-center px-4 " >Gender</th>
                <th className=" text-center px-4 " >Interert</th>
                <th className=" text-center px-4 " >action</th>
              </tr>
            </thead>
            <tbody>
              {this.state.t.map((c, i) => this.childTr({ data: c, key: i }))}
            </tbody>
          </table>
        </div>
      </main>
    );
  }
  changeH1() {
    let nomm = document.getElementById("nom").value;
    let agee = document.getElementById("age").value;
    let datee = document.getElementById("date").value;
    let ville = document.getElementById("ville").value;

    let genreTable = document.getElementsByClassName("genre");
    let genree = "";
    for (let index = 0; index < genreTable.length; index++) {
      genree = genreTable[index].checked ? genreTable[index].value : genree;
    }
    let interertTable = document.getElementsByClassName("Interert");
    let interert =[];
    for (let index = 0; index < interertTable.length; index++) {
      interert.push(interertTable[index].checked?interertTable[index].value+"/":"")
     
    }

    this.setState({
      t: [
        ...this.state.t,
        { id: Ex1.id, nome: nomm, ville:ville , age: agee, date: datee, genre: genree ,interert:interert },
      ],
    });
    Ex1.id++;
    return alert("Ajouter succes");
  }
  delet(id) {
    let pos = this.state.t.findIndex((e) => e.id === id);
    if (window.confirm("Are you sure to delete this client?")) {
      let tt = this.state.t.splice(pos, 1);
      this.setState({ tt });
      return alert("Deleted succes");
    }
  }
  childTr(props) {
    return (
      <tr>
        <td className="text-center ">{props.data.id}</td>
        <td className="text-center ">{props.data.nome}</td>
        <td className="text-center ">{props.data.ville}</td>
        <td className="text-center ">{props.data.age}</td>
        <td className="text-center ">{props.data.date}</td>
        <td className="text-center ">{props.data.genre}</td>
        <td className="text-center ">{props.data.interert}</td>
        <td>
          <button className="" onClick={() => this.delet(props.data.id)}>
            X
          </button>
        </td>
      </tr>
    );
  }
}
