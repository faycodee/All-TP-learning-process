import { Component } from "react";
import List from "./list";
import { Chercher } from "./search";
import { imageDB } from "../../firebase";
import { getDownloadURL, listAll, ref, uploadBytes } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";
import { motion, AnimatePresence, MotionConfig } from "framer-motion";

export default class GestionClient extends Component {
  static id = 0;
  tdata = [];
  state = { t: [...this.tdata], url: [], isVisibl: true };

  afficherImgsURL() {
    listAll(ref(imageDB, "files")).then((imgs) => {
      imgs.items.forEach((val) => {
        getDownloadURL(val).then((url) => {
          this.setState((prevState) => ({
            url: [...prevState.url, url],
          }));
        });
      });
    });
  }

  render() {
    return (
      <main
        id="mydiv"
        className="h-auto flex justify-center flex-col items-center py-9 bg-blue-100"
      >
        <motion.h1
        animate={{scale:[0,1]}}
        transition={{duration:1}} 
          
          className=" text-5xl relative font-mono font-extrabold 
        mb-20 p-9 bg-yellow-400 text-white w-full text-center "
        >
          Ajouter des Clients
        </motion.h1>
        <MotionConfig
          transition={{
            duration: 2,
          }}
        >
          <AnimatePresence mode="popLayout"  >
            {" "}
            {this.state.isVisibl && (
              <motion.div
              
                className="flex flex-col mb-[20px] mr-4 "
                exit={{ scale: 0  }}
                transition={{
                  duration:0.5
                }}
              >
                <motion.div
                  className="grid"
                  initial={{
                    x: "-1100px",
                  }}
                  animate={{
                    x: "0px",
                  }}
                  transition={{
                    delay: 0.5,
                    duration: 1,

                    ease: "backInOut",
                  }}
                  type="text"
                >
                  Nom:
                  <input id="nom" className="w-[650px] mr-4 max-md:w-[350px]" />
                </motion.div>
                <motion.div
                  className="grid"
                  initial={{
                    x: "-1100px",
                  }}
                  animate={{
                    x: "0px",
                  }}
                  transition={{
                    delay: 1,
                    duration: 1,

                    ease: "backInOut",
                  }}
                  type="text"
                >
                  Prenom:
                  <input
                    id="prenom"
                    type="text"
                    className="w-[650px] mr-4 max-md:w-[350px]"
                  />
                </motion.div>

                <motion.div
                  className="grid"
                  initial={{
                    x: "-1100px",
                  }}
                  animate={{
                    x: "0px",
                  }}
                  transition={{
                    delay: 1.5,
                    duration: 1,

                    ease: "backInOut",
                  }}
                  type="text"
                >
                  Ville
                  <motion.select id="ville">
                    <option value="casa" key="">
                      casa
                    </option>
                    <option value="fes" key="">
                      fes
                    </option>
                    <option value="rabat" key="">
                      rabat
                    </option>
                  </motion.select>
                </motion.div>
                <motion.div
                  className="grid"
                  initial={{
                    x: "-1100px",
                  }}
                  animate={{
                    x: "0px",
                  }}
                  transition={{
                    delay: 2,
                    duration: 1,

                    ease: "backInOut",
                  }}
                  type="text"
                >
                  Photo
                  <motion.input type="file" name="photo" id="photo" />
                </motion.div>
                <motion.button
                  onClick={() => this.changeH1()}
                  whileHover={{ rotate: "-2.2deg" }}
                  transition={{ duration: 0.3 }}
                  className="bg-slate-400 mt-6 py-2 px-4 rounded-lg text-white hover:bg-slate-600  mb-[60px] "
                >
                  Ajouter Client
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </MotionConfig>

        <motion.button
        layout
        transition={{delay:0.1}}
          onClick={() => this.setState({ isVisibl: !this.state.isVisibl })}
        >
          show/hide
        </motion.button>
        <Chercher chercherHandl={this.chercherHandl} />

        <List data={this.state.t} delet={this.delet} />
      </main>
    );
  }
  clearData() {
    const div = document.getElementById("mydiv");
    const inputs = div.getElementsByTagName("input");

    for (let i = 0; i < inputs.length; i++) {
      inputs[i].value = "";
    }
  }

  changeH1() {
    let nomm = document.getElementById("nom").value;
    let pre = document.getElementById("prenom").value;
    let ville = document.getElementById("ville").value;
    let src = document.getElementById("photo").files[0];

    const imgRef = ref(imageDB, `files/${uuidv4()}`);

    uploadBytes(imgRef, src).then(() => {
      getDownloadURL(imgRef).then((url) => {
        this.tdata.push({
          id: gestionClient.id,
          nom: nomm,
          prenom: pre,
          ville: ville,
          src: url,
        });
        this.setState({
          t: [
            ...this.state.t,
            {
              id: gestionClient.id,
              nom: nomm,
              prenom: pre,
              ville: ville,
              src: url,
            },
          ],
        });
      });
    });
    gestionClient.id++;
    this.clearData();

    return alert("Ajouter succes");
  }

  chercherHandl = (cherText) => {
    let text = cherText.toLowerCase();
    let mydata =
      text.length > 0
        ? [...this.tdata.filter((e) => e.nom.includes(text))]
        : this.tdata;
    this.setState({ t: [...mydata] });
  };

  delet = (id) => {
    let pos = this.state.t.findIndex((e) => e.id === id);
    console.log(pos);
    if (window.confirm(`Are you sure to delete ${this.state.t[pos].prenom}?`)) {
      let tt = this.state.t.splice(pos, 1);
      this.setState({ tt });
      return alert("Deleted succes");
    }
  };
}
