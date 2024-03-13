const express = require('express');
const db = require('./db').db;
const app = express();
const cors = require("cors");
const bodyParser = require('body-parser');

const { optimalVisitRoute } = require("./tsp");
const { coordenatesParser } = require("./utils/parsers");

const corsOptions = {
  origin: ['http://localhost:3000'],
}

app.use(bodyParser.json());
app.use(cors(corsOptions));

app.post('/clientes/new', async (req, res) => {
   try {
      const id = await db("clientes").insert(req.body);
      res.status(201).send({ id });
    } catch (error) {
      res.status(500).send("Erro na criação");
    }
 });

app.get("/clientes", async (req, res) => {
  const search = req.query.search || "";
  try {
    const clientes = !search ? (
      await db.from("clientes")
    )  : (
      await db.from("clientes")
      .where("nome", "LIKE", `%${search}%`)
      .orWhere("email", "LIKE", `%${search}%`)
      .orWhere("telefone", "LIKE", `%${search}%`)
    ); 
    const clientesWithStringCoordinates = clientes.map(c => {
      return {
        ...c,
        coordenadas: coordenatesParser(c.coordenadas)
      };
    });
     res.status(200).send(clientesWithStringCoordinates);
   } catch (error) {
     res.status(500).send("Erro na obtenção dos dados");
   }
});

app.get("/clientes/optimalvisitroute", async (_, res) => {
  try {     
     const clientes = await db.from("clientes");
     const bestRoute = optimalVisitRoute(clientes);
     const bestRouteWithStringCoordinates = bestRoute.map(c => {
      return {
        ...c,
        coordenadas: coordenatesParser(c.coordenadas)
      };
    });
     res.status(200).send(bestRouteWithStringCoordinates);
   } catch (error) {
     res.status(500).send("Erro");
   }
});

app.listen(3001, () => {
  console.log("connection established");
});