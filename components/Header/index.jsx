import styles from "../../src/styles/header.module.scss";
import Image from "next/image";
import Router from "next/router";

export default function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.options}>
        <div className={styles.loginDiv}>
          <button
            onClick={() => {
              Router.push("/login");
            }}
            className={styles.buttonLogin}
          >
            ENTRAR
          </button>
          <button
            onClick={() => {
              Router.push("/register");
            }}
            className={styles.buttonSignup}
          >
            REGISTRAR
          </button>
        </div>

        <h2
          onClick={() => {
            Router.push("/cadastrarTreino");
          }}
          className={styles.navText}
        >
          Cadastrar um treino
        </h2>
        <h2
          onClick={() => {
            Router.push("/meusTreinos");
          }}
          className={styles.navText}
        >
          Meus Treinos
        </h2>

        <Image
          className={styles.image}
          src={"/TrainProBranco.png"}
          width={136}
          height={100}
          alt="Imagem"
          priority
          onClick={() => {
            Router.push("/");
          }}
        />
      </div>
    </div>
  );
}
