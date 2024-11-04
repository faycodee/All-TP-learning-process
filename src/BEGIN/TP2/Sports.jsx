import { useState } from "react";  

export default function Sports() {  
    // Setting state for each sport  
    const [sportsState, setSportsState] = useState({  
        Foot: false,  
        Basket: false,  
        Tenis: false,  
        Autre: false,  
    });  

    const sports = Object.keys(sportsState).map(name => ({  
        name,  
        etat: sportsState[name]  
    }));  

    const handleCheckboxChange = (name) => {  
        setSportsState(prevState => ({  
            ...prevState,  
            [name]: !prevState[name]  
        }));  
    };  

    

    return (  
        <div>  
            <span>Choisissez vos sports préférés :</span>  
            {sports.map((s, i) => (  
                <span key={i}>  
                    <input  
                        type="checkbox"  
                        name={s.name}  
                        id={"checkbox" + i}  
                        checked={s.etat}  
                        onChange={() => handleCheckboxChange(s.name)}  
                    />  
                    {s.name}  
                </span>  
            ))}  
            <div>  
                <h2>Sports choisis :</h2>  
                <ul>  
                    {sports  
                        .filter(s => s.etat)  
                        .map((s, index) => (  
                            <li key={index}>{s.name}</li>  
                        ))}  
                </ul>  
            </div>  
        </div>  
    );  
}

// import { useState } from "react";

// export default Sports
// function Sports() {
//      const [State0,SetState0]=useState("")
//      const [State1,SetState1]=useState("")
//      const [State2,SetState2]=useState("")
//      const [State3,SetState3]=useState("")

//      const sports = [
//         {name:"Foot",etat:State0},
//         {name:"Basket",etat:State1},
//         {name:"Tenis",etat:State2},
//         {name:"Autre",etat:State3}
//     ];
//      return (
//            <div>
//               <span>Choissez vos sports prefers :</span>
//               {sports.map(
//                 // (s,i)=> < childCheackBox key={i} data={s.name} pos={i}/>
//                 (s,i)=> <span  key={i}> <input  type="checkbox" name={s.name} id={"checkbox"+i} onChange={
//                     ()=>SetState(i)
//                 } />{s.name}</span>
                
//               )}
//             <div>
//                 <h2>Sports choisis :</h2>
//                 <ul>
               
//                 </ul>
//               </div>

//            </div>
           
         
//      )
//      function SetState(i){
//         if ( document.getElementById("checkbox"+i).checked) {
//           alert("yes its checked")
//         (i=0?SetState0.etat("TRUE"):i=1?SetState1.etat("TRUE"):i=2?SetState2.etat("TRUE"):i=3?SetState3.etat("TRUE"):("FALSE"))
          
//           alert(State1)

//         }
//      }
// }



// function childCheackBox(props) {
//   return <span> <input type="checkbox" name={props.data} id={props.pos} />{props.data}</span>
// }



