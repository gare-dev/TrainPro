import { handleDates } from "../utils/date";
import axios, { AxiosInstance } from "axios";

class _Api {
  private _instance: AxiosInstance;
  private _baseUrl: string;

  constructor(apiBaseUrl: string) {
    this._baseUrl = apiBaseUrl;

    this._instance = axios.create({
      timeout: 30000,
      baseURL: "http://localhost:3002",
      headers: {
        "Content-Type": "application/json",
      },
      responseType: "json",
    });

    this._instance.interceptors.response.use((response) => {
      return { ...response, data: handleDates(response.data) };
    });
  }

  public async cadastrar(email: string, senha: string, nome: string) {
    try {
      const response = this._instance.post("/cadastrar", {
        nome,
        email,
        senha,
      });
      return response;
    } catch (e) {
      console.log(e);
    }
  }

  public async login(email: string, senha: string) {
    try {
      const response = this._instance.post("/login", {
        email,
        senha,
      });
      return response;
    } catch (e) {
      console.log(e);
    }
  }

  public async cadastroTreino(treino) {
    try {
      const response = this._instance.post("/cadastroTreino", treino);
      return response;
    } catch (e) {
      console.log(e);
    }
  }

  public async meusTreinos(email: string) {
    try {
      const response = await this._instance.post("/meusTreinos", {
        email,
      });
      return response;
    } catch (e) {
      console.log(e);
    }
  }
}
const Api = new _Api("http://localhost:3002/");
export default Api;
