import styles from "../../src/styles/cadastrarTreino.module.scss";
import Header from "../../components/Header";
import { useEffect, useState } from "react";
import Api from "../../api";
import { AxiosError } from "axios";
import useAlert from "../../hooks/useAlert";

export default function CadastrarTreino() {
  const { showAlert } = useAlert();
  const [treino, setTreino] = useState({
    nome: "",
    qtdEx: 6,
    categoria: "",
    data: "",
    series: 0,
    exercicios: Array(6).fill({ nome: "", repts: "", kgs: "" }),
  });
  let processedData = [];

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

      if (response.data.code === "200") {
        showAlert("Treino cadastrado com sucesso!", "success");
        setTreino({
          nome: "",
          qtdEx: treino.qtdEx,
          categoria: "",
          data: "",
          series: 0,
          exercicios: Array(6).fill({ nome: "", repts: "", kgs: "" }),
        });
      }
    } catch (e) {
      if (e instanceof AxiosError) {
        if (e.response?.data.code === "500") {
          showAlert(
            "Não foi possível adicionar o treino. Tente novamente mais tarde.",
            "danger"
          );
          setTreino({
            nome: "",
            qtdEx: 6,
            categoria: "",
            data: "",
            series: 0,
            exercicios: Array(6).fill({ nome: "", repts: "", kgs: "" }),
          });
        }
        if (e.response.data.code === "400") {
          showAlert("Já existe um treino com esse mesmo nome.", "danger");
          setTreino({
            nome: "",
            qtdEx: 6,
            categoria: "",
            data: "",
            series: 0,
            exercicios: Array(6).fill({ nome: "", repts: "", kgs: "" }),
          });
        }
      }
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
              <label className={styles.infosText}>Nome*</label>
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
              <label className={styles.infosText}>Divisão do Treino*</label>
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
              <label className={styles.infosText}>Data*</label>
              <input
                onChange={(e) => {
                  let value = e.target.value.replace(/\D/g, "");

                  if (value.length > 8) value = value.slice(0, 8);
                  if (value.length > 4) {
                    value = `${value.slice(0, 2)}/${value.slice(
                      2,
                      4
                    )}/${value.slice(4)}`;
                  } else if (value.length > 2) {
                    value = `${value.slice(0, 2)}/${value.slice(2)}`;
                  }

                  setTreino((treino) => ({
                    ...treino,
                    data: value,
                  }));
                }}
                onKeyDown={(e) => {
                  const allowedKeys = [
                    "Backspace",
                    "Delete",
                    "ArrowLeft",
                    "ArrowRight",
                    "Tab",
                  ];
                  if (allowedKeys.includes(e.key)) return;

                  if (!/^\d$/.test(e.key)) {
                    e.preventDefault();
                  }
                }}
                className={styles.inputInfos}
                type="text"
                value={treino.data}
                maxLength={10}
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
