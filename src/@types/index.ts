import express from "express";
import jwtAuthenticationMiddleware from "../middlewares/jwt-authenticatio.middleware";
import errorhandler from "../middlewares/error-handler.middleware";
import authorizationRoute from "../routes/authorization.route";
import statusRoute from "../routes/status.route";
import usersRoute from "../routes/users.route";

const app = express();

//Configurações da aplicação
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//Configurações de Rotas
app.use(statusRoute);
app.use(authorizationRoute);
app.use(jwtAuthenticationMiddleware);
app.use(usersRoute);


// Configuração do nosso handler de erro
app.use(errorhandler);

//Inicialização do Servidor

app.listen(3000, () => {
  console.log("Aplicação executando na porta 3000!");
});
