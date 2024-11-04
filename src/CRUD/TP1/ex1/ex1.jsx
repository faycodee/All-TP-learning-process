import { Component } from "react";
import "./ex1Sty.css" 
export default class Ex1 extends  Component {
      state = {
          text :"lll",
        classErr :"Err",
        msgErr:"Au moin 10 caracters SVP !!",
        msgWel :""
      }
      changeHandel(e){
        // alert(e.target.value.length)
        let p =document.getElementById("msgErr")
         e.target.value.length > 10 ? this.setState({...this.state , msgErr:"Vou avez nien saisi plus de 10 caracteres" ,classErr:"Suc"}): this.setState({...this.state , msgErr:"Au moin 10 caracters SVP !!" ,classErr:"Err"})
       
      }
      changeHandel2(){
        let InpText =document.getElementById("InpText")
        //  let p =document.getElementById("msgErr")
        InpText.value.length > 10 ? this.setState({...this.state , msgWel:"Vous avez ecrit :"+InpText.value}): this.setState({...this.state , msgWel:""})
       
      }
      render(){
        return (
       <div>
         <div className="ex1Sty"><input id="InpText" type="text" onInput={(e)=>this.changeHandel(e)}/><button type="submit" onClick={()=>this.changeHandel2()}>Valider</button></div>
         <div id="msgErr" className={this.state.classErr}><p>{this.state.msgErr}</p></div>
         <div className="msgWel"><p>{this.state.msgWel}</p></div>
       </div>
        )
      }

}