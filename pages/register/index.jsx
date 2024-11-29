import styles from "../../src/styles/register.module.scss";
import Header from "../../components/Header";
import Api from "../../api/index";
import { AxiosError } from "axios";
import router from "next/router";
import { useState } from "react";
import useAlert from "../../hooks/useAlert";

export default function Register() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [nome, setNome] = useState("");
  const { showAlert } = useAlert();

  const handleSubmit = async () => {
    try {
      const response = await Api.cadastrar(email, senha, nome);

      localStorage.setItem("logged", true);
      localStorage.setItem("email", email);
      showAlert("Conta registrada com sucesso!", "success");
      router.push("/");
    } catch (e) {
      if (e instanceof AxiosError) {
        if (e.response?.data.code === "409") {
          showAlert("Uma conta com esse email já está registrada.", "danger");
        }
      }
    }
  };
  return (
    <div>
      <Header logged={false} />
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
