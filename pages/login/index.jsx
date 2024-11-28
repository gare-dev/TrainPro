import styles from "../../src/styles/login.module.scss";
import Header from "../../components/Header";

import router from "next/router";
import { useState } from "react";
import Api from "../../api";

export default function Login() {
  const [senha, setSenha] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async () => {
    try {
      const response = await Api.login(email, senha);

      if (response.data.email != "") {
        localStorage.setItem("email", response.data.email);
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div>
      <Header />
      <div className={styles.container}>
        <div className={styles.detalhe}></div>
        <h2 className={styles.title}>ENTRAR</h2>
        <p className={styles.subtitle}>
          Para continuar evoluindo com o TrainPro!
        </p>

        <div className={styles.inputDiv}>
          <div>
            <input
              placeholder="  Email"
              className={styles.input}
              type="text"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <input
              placeholder="  Senha"
              className={styles.input}
              type="text"
              name="senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
          </div>
        </div>

        <div
          style={{ display: "flex", justifyContent: "center", paddingTop: 20 }}
        >
          <button onClick={handleSubmit} className={styles.buttonCriar}>
            ENTRAR
          </button>
        </div>

        <div className={styles.criarContaDiv}>
          <h2 className={styles.mainText}>Não tem uma conta?</h2>
          <p
            onClick={() => {
              router.push("/register");
            }}
            className={styles.subText}
          >
            Registre-se.
          </p>
        </div>
      </div>
    </div>
  );
}
