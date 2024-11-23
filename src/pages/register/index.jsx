import styles from "@/styles/register.module.scss";
import Header from "../../../components/Header";
import router from "next/router";

export default function Register() {
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
            />
          </div>
          <div>
            <input
              placeholder="  Email"
              className={styles.input}
              type="text"
              name="email"
              id=""
            />
          </div>
          <div>
            <input
              placeholder="  Senha"
              className={styles.input}
              type="text"
              name="senha"
              id=""
            />
          </div>
        </div>

        <div
          style={{ display: "flex", justifyContent: "center", paddingTop: 20 }}
        >
          <button className={styles.buttonCriar}>CRIAR CONTA</button>
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
