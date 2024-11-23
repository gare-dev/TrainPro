import styles from "@/styles/login.module.scss";
import Header from "@/../components/Header";

import router from "next/router";

export default function Login() {
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
          <button className={styles.buttonCriar}>ENTRAR</button>
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
