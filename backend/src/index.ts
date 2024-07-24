import express from "express";
import cors from "cors";
import ConnectDatabase from "./external/db/connectInDB";
import RepositoryUserMongoose from "./external/mongoose/RepositoryUserMongo";
import RegisterUser from "./core/user/useCases/RegisterUser";
import RegisterUserController from "./adapters/user/RegisterUserController";
import LoginUser from "./core/user/useCases/LoginUser";
import LoginUserController from "./adapters/user/LoginUserController";
import RepositoryPurchaseMongoose from "./external/mongoose/RepositoryPurchaseMongoose";
import CreatePurchase from "./core/purchase/useCases/CreatePurchase";
import CreatePurchaseController from "./adapters/purchase/CreatePurchaseController";
import ListPurchase from "./core/purchase/useCases/ListPurchase";
import ListPurchaseController from "./adapters/purchase/ListPurchaseController";
import DeletePurchase from "./core/purchase/useCases/DeletePurchase";
import DeletePurchaseController from "./adapters/purchase/DeletePurchaseController";
import UpdatePurchaseController from "./adapters/purchase/UpdatePurchaseController";
import UpdatePurchase from "./core/purchase/useCases/UpdatePurchase";
import GetByIdPurchase from "./core/purchase/useCases/GetByIdPurchase";
import GetByIdPurchaseController from "./adapters/purchase/GetByIdPurchaseController";

const app = express();
const port = 4000;
const db = new ConnectDatabase();
db.connect();
const corsOptions = {
  origin: ["http://localhost:3000", "https://card-control-ten.vercel.app"],
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json());

const repositoryUser = new RepositoryUserMongoose();

//  -------------------Rotas de Usuario
const registerUser = new RegisterUser(repositoryUser);
new RegisterUserController(app, registerUser);

const loginUser = new LoginUser(repositoryUser);
new LoginUserController(app, loginUser);

//  -------------------Rotas de Compras

const repositoryPurchase = new RepositoryPurchaseMongoose();

const createPurchase = new CreatePurchase(repositoryPurchase);
new CreatePurchaseController(app, createPurchase);

const listPurchase = new ListPurchase(repositoryPurchase);
new ListPurchaseController(app, listPurchase);

const updatePurchase = new UpdatePurchase(repositoryPurchase);
new UpdatePurchaseController(app, updatePurchase);

const deletePurchase = new DeletePurchase(repositoryPurchase);
new DeletePurchaseController(app, deletePurchase);

const getByIdPurchase = new GetByIdPurchase(repositoryPurchase);
new GetByIdPurchaseController(app, getByIdPurchase);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
