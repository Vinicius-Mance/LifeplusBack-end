import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
}));


app.get("/food", (req, res) => {

    const foods = [
        "Danone 50ml",
        "Chocolate Barra 90g",
        "Sorvete 200g",
        "Fatia de Bolo 100g",
        "Bolacha Pacote 60g",
        "Refrigerante 600 ml",
        "Refrigerante 250 ml",
        "banana (1unidade) 100g"
    ]

    return res.status(200).json({
        data: foods
    })
});


app.get("/historic", (req, res) => {
    const historic = [
        {
            time: "7:00",
            location: "Academia",
            preparation: "Pré treino",
            food: "Creatina",
            quantity: "50G",
            weekly: "5",
            daily: "2"
        },
        {
            time: "10:00",
            location: "Treino coletivo",
            preparation: "-",
            food: "Banana",
            quantity: "2",
            weekly: "3",
            daily: "2"
        },
        {
            time: "13:00",
            location: "Refeitório",
            preparation: "-",
            food: "Prato de almoço",
            quantity: "1",
            weekly: "5",
            daily: "1"
        },
        {
            time: "16:00",
            location: "Refeitório",
            preparation: "-",
            food: "Prato de pos-treino coletivo",
            quantity: "1",
            weekly: "5",
            daily: "1"
        }

    ];


    return res.status(200).json({
        data: historic
    })
})

app.listen(3000, () => console.log("Serve is running 🐱‍🏍"))