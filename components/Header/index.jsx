import styles from "../../src/styles/header.module.scss";
import Image from "next/image";
import Router from "next/router";
import { useEffect, useState } from "react";

export default function Header() {
  const [isLogged, setIslogged] = useState(false);

  useEffect(() => {
    const logged = localStorage.getItem("logged");

    if (logged === "true") {
      setIslogged(true);
      return;
    }

    setIslogged(false);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.options}>
        {!isLogged ? (
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
        ) : (
          <div className={styles.loginDiv}>
            <button
              onClick={() => {
                localStorage.setItem("logged", false);
                localStorage.setItem("email", "");
                setIslogged(false);
                Router.push("/");
              }}
              className={styles.buttonLogin}
              style={{ backgroundColor: "#2d4059" }}
            >
              SAIR
            </button>
          </div>
        )}

        {isLogged && (
          <h2
            onClick={() => {
              Router.push("/cadastrarTreino");
            }}
            className={styles.navText}
          >
            Cadastrar um treino
          </h2>
        )}
        {isLogged && (
          <h2
            onClick={() => {
              Router.push("/meusTreinos");
            }}
            className={styles.navText}
          >
            Meus Treinos
          </h2>
        )}

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
