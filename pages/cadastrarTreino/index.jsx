import styles from "../../src/styles/cadastrarTreino.module.scss";
import Header from "../../components/Header";
import { useEffect, useState } from "react";
import Api from "../../api";

export default function CadastrarTreino() {
  const [treino, setTreino] = useState({
    nome: "",
    qtdEx: 6,
    categoria: "",
    data: "",
    series: 0,
    exercicios: Array(6).fill({ nome: "", repts: "", kgs: "" }),
  });
  let processedData = [];

  useEffect(() => {
    console.log(treino);
  }, [treino]);

  const handleChangeExercicio = (index, field, value) => {
    const newExercicios = [...treino.exercicios];
    newExercicios[index] = { ...newExercicios[index], [field]: value };
    setTreino({ ...treino, exercicios: newExercicios });
  };

  useEffect(() => {
    const updatedExercicios = Array(treino.qtdEx).fill({
      nome: "",
      repts: "",
      kgs: "",
    });
    setTreino((prevTreino) => ({
      ...prevTreino,
      exercicios: updatedExercicios,
    }));
  }, [treino.qtdEx]);

  useEffect(() => {
    treino.exercicios.forEach((item, index) => {
      if (item.nome != "") {
        processedData.push({
          user: localStorage.getItem("email"),
          nome: treino.nome,
          categoria: treino.categoria,
          series: +treino.series,
          data: treino.data,
          nomeEx: item.nome,
          repts: +item.repts,
          kgs: +item.kgs,
        });
        console.log(processedData);
      }
    });
  }, [treino]);
  const renderElements = () => {
    return Array.from({ length: treino.qtdEx }).map((_, index) => (
      <div className={styles.exMainDiv} key={index}>
        <div className={styles.inputExDiv}>
          <label className={styles.textEx}>Exercício {index + 1}</label>
          <input
            className={styles.exInput}
            type="text"
            value={treino.exercicios[index]?.nome || ""}
            onChange={(e) =>
              handleChangeExercicio(index, "nome", e.target.value)
            }
          />
        </div>

        <div className={styles.inputExDiv}>
          <label className={styles.textEx}>Reps</label>
          <input
            style={{ width: 40, textAlign: "center" }}
            className={styles.exInput}
            type="text"
            value={treino.exercicios[index]?.repts || ""} // Verifica se o exercício existe
            onChange={(e) =>
              handleChangeExercicio(index, "repts", e.target.value)
            } // Atualiza 'reps' do exercício
            maxLength={2}
          />
        </div>

        <div className={styles.inputExDiv}>
          <label className={styles.textEx}>Kgs</label>
          <input
            style={{ width: 40, textAlign: "center" }}
            className={styles.exInput}
            type="text"
            value={treino.exercicios[index]?.kgs || ""}
            onChange={(e) =>
              handleChangeExercicio(index, "kgs", e.target.value)
            }
            maxLength={3}
          />
        </div>
      </div>
    ));
  };

  const handleSubmit = async () => {
    try {
      const response = await Api.cadastroTreino(processedData);
      console.log(response);
    } catch (e) {
      console.log(e);
    }
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
              <input
                value={treino.nome}
                className={styles.inputInfos}
                type="text"
                onChange={(e) =>
                  setTreino((treino) => ({
                    ...treino,
                    nome: e.target.value,
                  }))
                }
              />
            </div>
            <div className={styles.inputsInfoDiv}>
              <label className={styles.infosText}>Series</label>
              <input
                maxLength={2}
                value={treino.series}
                className={styles.inputInfos}
                type="text"
                onChange={(e) =>
                  setTreino((treino) => ({
                    ...treino,
                    series: e.target.value,
                  }))
                }
              />
            </div>

            <div className={styles.inputsInfoDiv}>
              <label className={styles.infosText}>Exercícios</label>
              <select
                onChange={(e) =>
                  setTreino((treino) => ({
                    ...treino,
                    qtdEx: e.target.value,
                  }))
                }
                style={{ textAlign: "center" }}
                className={styles.inputInfos}
                value={treino.qtdEx}
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
              <input
                style={{ textAlign: "center" }}
                onChange={(e) =>
                  setTreino((treino) => ({
                    ...treino,
                    categoria: e.target.value.toUpperCase(),
                  }))
                }
                className={styles.inputInfos}
                type="text"
                value={treino.categoria.toUpperCase()}
                maxLength={1}
              />
            </div>

            <div className={styles.inputsInfoDiv}>
              <label className={styles.infosText}>Data</label>
              <input
                onChange={(e) =>
                  setTreino((treino) => ({
                    ...treino,
                    data: e.target.value,
                  }))
                }
                className={styles.inputInfos}
                type="text"
                value={treino.data}
              />
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
            <button onClick={handleSubmit} className={styles.buttonCriar}>
              cadastrar treino
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
