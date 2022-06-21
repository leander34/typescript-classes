// Singleton - GoF |    Factory method - GoF

export class DataBase {
  private static database: DataBase;

  private constructor(
    private host: string,
    private user: string,
    private password: string
  ) {}

  connect() {
    console.log(`Conectado: ${this.host}, ${this.user}, ${this.password}.`);
  }

  static getDataBase(host: string, user: string, password: string): DataBase {
    if (DataBase.database) {
      console.log("Retornando a instância já criada do db.");
      return DataBase.database;
    }

    console.log("Criando a primeira instância do db.");
    DataBase.database = new DataBase(host, user, password);
    return DataBase.database;
  }
}
// com o construtor privado consigo ter mais controle sobre minhas instancias da classe
// nesse caso era importante haver somente uma conexao com o banco de dados para evitar problemas


const dataBase = DataBase.getDataBase('localhost', 'root', '123456')
dataBase.connect()

const dataBase2 = DataBase.getDataBase('localhoste', 'root', '123456')
dataBase2.connect()

const dataBase3 = DataBase.getDataBase('localhosteee', 'root', '123456')
dataBase3.connect()






