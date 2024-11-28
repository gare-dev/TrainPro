import styles from "../../src/styles/register.module.scss";
import Header from "../../components/Header";
import Api from "../../api/index";

import router from "next/router";
import { use, useState } from "react";

export default function Register() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [nome, setNome] = useState("");

  const handleSubmit = async () => {
    try {
      const response = await Api.cadastrar(email, senha, nome);

      router.push("/login");
      console.log(response.data);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div>
      <Header />
      <div className={styles.container}>
        <div className={styles.detalhe}></div>
        <h2 className={styles.title}>REGISTRE-Se</h2>
        <p className={styles.subtitle}>
          Para acessar todas as funcionaliades do TrainPro!
        </p>

        <div className={styles.inputDiv}>
          <div>
            <input
              placeholder="  Nome"
              className={styles.input}
              type="text"
              name="email"
              id=""
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </div>
          <div>
            <input
              placeholder="  Email"
              className={styles.input}
              type="text"
              name="email"
              id=""
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
              id=""
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
          </div>
        </div>

        <div
          style={{ display: "flex", justifyContent: "center", paddingTop: 20 }}
        >
          <button onClick={handleSubmit} className={styles.buttonCriar}>
            CRIAR CONTA
          </button>
        </div>

        <div className={styles.criarContaDiv}>
          <h2 className={styles.mainText}>Já tem uma conta?</h2>
          <p
            onClick={() => {
              router.push("/login");
            }}
            className={styles.subText}
          >
            Entre.
          </p>
        </div>
      </div>
    </div>
  );
}
