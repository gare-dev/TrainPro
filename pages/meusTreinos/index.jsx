import styles from "../../src/styles/meusTreinos.module.scss";
import Header from "../../components/Header";
import { useState } from "react";

export default function MeusTreinos() {
  const treinos = [
    {
      id: 1,
      nome: "Treino do cbum",
      categoria: "A",
      series: 7,
      data: "10/12",
      exercicio: [
        {
          nome: "Supino Reto",
          reps: 15,
          kgs: 30,
        },
        {
          nome: "Agachamento Livre",
          reps: 12,
          kgs: 40,
        },
        {
          nome: "Rosca Direta",
          reps: 10,
          kgs: 20,
        },
        {
          nome: "Pull Down",
          reps: 12,
          kgs: 25,
        },
        {
          nome: "Leg Press",
          reps: 10,
          kgs: 100,
        },
        {
          nome: "Desenvolvimento com Halteres",
          reps: 8,
          kgs: 15,
        },
        {
          nome: "Panturrilha Sentado",
          reps: 20,
          kgs: 30,
        },
      ],
    },
  ];
  const [treinoSelecionado, setTreinoSelecionado] = useState(null);

  const handleClick = (treino) => {
    setTreinoSelecionado(treino);
  };
  const renderizarItens = () => {
    return treinos.map((treino) => (
      <div
        key={treino.nome}
        onClick={() => handleClick(treino)}
        className={styles.treinoBox}
      >
        <div style={{ display: "flex", height: "100%", alignItems: "center" }}>
          <h2 className={styles.trainName}>{treino.nome}</h2>
        </div>
        <div className={styles.stats}>
          <h2 className={styles.infosText}>{treino.categoria}</h2>
          <h2 className={styles.infosText}>{treino.series}</h2>
          <h2 className={styles.infosText}>{treino.data}</h2>
        </div>
      </div>
    ));
  };

  const fecharPopup = () => {
    setTreinoSelecionado(null);
  };

  return (
    <div>
      <Header />
      <div className={styles.appDiv}>
        <div className={styles.container}>
          <div className={styles.detalhe}></div>
          <h2 className={styles.title}>meus treinos</h2>

          <div className={styles.titlesDiv}>
            <div style={{ display: "flex", justifyContent: "left" }}>
              <h2 style={{}} className={styles.titles}>
                NOME
              </h2>
            </div>
            <div style={{ display: "flex", justifyContent: "right", gap: 50 }}>
              <h2 className={styles.titles}>DIVISÃO</h2>
              <h2 className={styles.titles}>EXERCÍCIOS</h2>
              <h2 className={styles.titles}>DATA</h2>
            </div>
          </div>
          <div className={styles.treinosDiv}>{renderizarItens()}</div>
        </div>
      </div>
      {treinoSelecionado && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
        >
          <div className={styles.informacoesDiv}>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <div className={styles.inputsInfoDiv}>
                <label className={styles.infosText}>Nome</label>

                <input
                  value={treinoSelecionado.nome}
                  readOnly
                  className={styles.inputInfos}
                  type="text"
                />
              </div>

              <div className={styles.inputsInfoDiv}>
                <label className={styles.infosText}>Exercícios</label>

                <input
                  readOnly
                  className={styles.inputInfos}
                  type="text"
                  value={treinoSelecionado.series}
                />
              </div>

              <div className={styles.inputsInfoDiv}>
                <label className={styles.infosText}>Divisão do Treino</label>
                <input
                  readOnly
                  className={styles.inputInfos}
                  type="text"
                  value={treinoSelecionado.categoria}
                />
              </div>

              <div className={styles.inputsInfoDiv}>
                <label className={styles.infosText}>Data</label>
                <input
                  readOnly
                  className={styles.inputInfos}
                  type="text"
                  value={treinoSelecionado.data}
                />
              </div>
            </div>

            {Array.from({ length: treinoSelecionado.series }).map(
              (_, index) => (
                <div className={styles.exMainDiv} key={index}>
                  <div className={styles.inputExDiv}>
                    <label className={styles.textEx}>
                      Exercício {index + 1}
                    </label>
                    <input
                      value={treinoSelecionado.exercicio[index].nome}
                      readOnly
                      className={styles.exInput}
                      type="text"
                    />
                  </div>

                  <div className={styles.inputExDiv}>
                    <label className={styles.textEx}>Reps</label>
                    <input
                      style={{ width: 40, textAlign: "center" }}
                      className={styles.exInput}
                      type="text"
                      maxLength={2}
                      readOnly
                      value={treinoSelecionado.exercicio[index].reps}
                    />
                  </div>

                  <div className={styles.inputExDiv}>
                    <label className={styles.textEx}>Kgs</label>
                    <input
                      style={{ width: 40, textAlign: "center" }}
                      className={styles.exInput}
                      type="text"
                      maxLength={3}
                      readOnly
                      value={treinoSelecionado.exercicio[index].kgs}
                    />
                  </div>
                </div>
              )
            )}
            <button
              style={{
                backgroundColor: "#2d4059",
                color: "white",
                border: "none",
                borderRadius: "5px",
                padding: "10px 20px",
                cursor: "pointer",
                marginTop: "10px",
                marginLeft: 10,
              }}
              onClick={fecharPopup}
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
