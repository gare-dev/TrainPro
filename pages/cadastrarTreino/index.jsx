import styles from "@/styles/cadastrarTreino.module.scss";
import Header from "../../components/Header";
import { useState } from "react";

export default function CadastrarTreino() {
  const [qtdEx, setQtdEx] = useState(6);

  const renderElements = () => {
    return Array.from({ length: qtdEx }).map((_, index) => (
      <div className={styles.exMainDiv} key={index}>
        <div className={styles.inputExDiv}>
          <label className={styles.textEx}>Exercício {index + 1}</label>
          <input className={styles.exInput} type="text" />
        </div>

        <div className={styles.inputExDiv}>
          <label className={styles.textEx}>Reps</label>
          <input
            style={{ width: 40, textAlign: "center" }}
            className={styles.exInput}
            type="text"
            maxLength={2}
          />
        </div>

        <div className={styles.inputExDiv}>
          <label className={styles.textEx}>Kgs</label>
          <input
            style={{ width: 40, textAlign: "center" }}
            className={styles.exInput}
            type="text"
            maxLength={3}
          />
        </div>
      </div>
    ));
  };
  return (
    <div>
      <Header />
      <div className={styles.appDiv}>
        <div className={styles.container}>
          <div className={styles.detalhe}></div>
          <h2 className={styles.title}>cadastrar treino</h2>
          <div className={styles.informacoesDiv}>
            <div className={styles.inputsInfoDiv}>
              <label className={styles.infosText}>Nome</label>
              <input className={styles.inputInfos} type="text" name="" id="" />
            </div>

            <div className={styles.inputsInfoDiv}>
              <label className={styles.infosText}>Exercícios</label>
              <select
                onChange={(e) => setQtdEx(e.target.value)}
                style={{ textAlign: "center" }}
                className={styles.inputInfos}
                value={qtdEx}
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
              </select>
            </div>

            <div className={styles.inputsInfoDiv}>
              <label className={styles.infosText}>Divisão do Treino</label>
              <input className={styles.inputInfos} type="text" name="" id="" />
            </div>

            <div className={styles.inputsInfoDiv}>
              <label className={styles.infosText}>Data</label>
              <input className={styles.inputInfos} type="text" name="" id="" />
            </div>
          </div>
          <div className={styles.exerciciosDiv}>{renderElements()}</div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              paddingTop: 20,
              paddingBottom: 20,
            }}
          >
            <button className={styles.buttonCriar}>cadastrar treino</button>
          </div>
        </div>
      </div>
    </div>
  );
}
