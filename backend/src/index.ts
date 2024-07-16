import express from 'express'
import cors from 'cors'
import ConnectDatabase from './external/db/connectInDB'
import RepositoryUserMongoose from './external/mongoose/RepositoryUserMongo'
import RegisterUser from './core/user/useCases/RegisterUser'
import RegisterUserController from './adapters/RegisterUserController'
import LoginUser from './core/user/useCases/LoginUser'
import LoginUserController from './adapters/LoginUserController'

const app = express()
const port = 4000
const db = new ConnectDatabase
db.connect()
const corsOptions = {
    origin: ["http://localhost:3000", "https://mural-frontend.vercel.app"],
    optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json());

const repositoryUser = new RepositoryUserMongoose();

const registerUser = new RegisterUser(repositoryUser);
new RegisterUserController(app, registerUser);

const loginUser = new LoginUser(repositoryUser);
new LoginUserController(app, loginUser);

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})
