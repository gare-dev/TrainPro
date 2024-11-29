import Header from "../components/Header";
import styles from "../src/styles/index.module.scss";
import router from "next/router";

export default function Index() {
  return (
    <div style={{ paddingBottom: "0px" }}>
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
            <h5 className={styles.textBox}>Praticide</h5>
            <p>
              Organizaremos o seu treino que encaixe na sua rotina. Entendemos
              que a correria do dia a dia rouba o seu tempo, mas agora, não
              mais!
            </p>
          </div>
          <div className={styles.normal}>
            <h5 className={styles.textBox}>Organização</h5>
            <p>
              Fundamental para o sucesso. Separe por categoria, por parte do
              corpo, da maneira que quiser! Organizaremos e iremos lhe retornar
              do jeito que pedir.
            </p>
          </div>
          <div className={styles.normal}>
            <h5 className={styles.textBox}>Evolução</h5>
            <p>
              É o que você procura, e é o que terá! Com o nosso sistema de
              armazenamento de dados, otimizaremos muito mais o tempo do seu
              treino.
            </p>
          </div>
          <div className={styles.normal}>
            <h5 className={styles.textBox}>Resultados</h5>
            <p>
              Veja sua Evolução com o decorrer do tempo. Compare o antes e
              depois, e veja quanto o TrainPro pode ser útil na sua vida.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.footer}></div>
    </div>
  );
}
