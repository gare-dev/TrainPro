import Header from "../components/Header";
import styles from "../src/styles/index.module.scss";
import router from "next/router";

export default function Index() {
  return (
    <div>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
      />

      <Header />
      <section className={styles.Trein}>
        <div className={styles["Trein-text"]}>
          <div className={styles["Trein-main"]}>
            <button
              onClick={() => {
                router.push("/register");
              }}
              className={styles.btn}
            >
              <a href="">Entre agora</a>
            </button>
          </div>

          <h5>O seu treino, do seu jeito!</h5>

          <div className={styles.titulo}>
            <span className={styles.txtdigitado}></span>
          </div>

          <p className={styles.pa}>
            Treine com eficiência!
            <br />
            Se preocupe com a execução, que nós cuidaremos da organização
          </p>

          <hr className={styles.hr} />

          <ul className={styles.socialmedia}>
            <li className={styles.redes}>
              <a href="">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
            </li>
            <li className={styles.redes}>
              <a href="">
                <i className="fa-brands fa-instagram"></i>
              </a>
            </li>
            <li className={styles.redes}>
              <a href="">
                <i className="fa-brands fa-github"></i>
              </a>
            </li>
            <li className={styles.redes}>
              <a href="">
                <i className="fa-brands fa-facebook"></i>
              </a>
            </li>
          </ul>
        </div>
      </section>
      <div class={styles["container-right"]}>
        <div className={styles["trein-lista"]}>
          <div className={styles["normal"]}>
            <h5>Praticide</h5>
            <p>
              organizaremos o seu treino que encaixe na sua rotina. Entendemos
              que a correria do dia a dia rouba o seu tempo, mas agora, não
              mais!
            </p>
          </div>
          <div className={styles.normal}>
            <h5>Organização</h5>
            <p>
              fundamental para o sucesso. separe por categoria, por parte do
              corpo, da maneira que quiser! organizaremos e iremos lhe retornar
              do jeito que pedir.
            </p>
          </div>
          <div className={styles.normal}>
            <h5>Evolução</h5>
            <p>
              É o que você procura, e é o que terá! com o nosso sistema de
              armazenamento de dados, otimizaremos muito mais o tempo do seu
              treino.
            </p>
          </div>
          <div className={styles.normal}>
            <h5>Resultados</h5>
            <p>
              veja sua Evolução com o decorrer do tempo. compare o antes e
              depois, e veja quanto o TrainPro pode ser útil na sua vida.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
