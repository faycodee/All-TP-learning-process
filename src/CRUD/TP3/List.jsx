export  default function List(props) {
    return(
        <div>
    <h2>Resultat list</h2>
       <ul>
        {( props.stateS).map((e,i)=><li key={i}>{e.nom}</li>)}
       </ul>
    </div>
    )
}