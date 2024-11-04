import "./expo1.css"

function Exp01() {
    const tFruit =["banane","appel","orange","kiwi"]
    // const fruitsPair = tFruit
    return (
      <div className="App">
        <header className="App-header">
         <h1>List de Fruits </h1>
         <table>
         <tr>
             {tFruit.map((e,i)=><Enfant key={i}  fruit={e} />)}
         </tr>
         </table>
        </header>
      </div>
    );
  }

  function Enfant(props) {
    return <td>{props.fruit}</td>
  }

  export default Exp01;