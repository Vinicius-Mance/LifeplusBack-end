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
        "Banana (1unidade) 100g"
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
});


app.get("/getGraph", (req, res) => {
    data = [
        {
            date: "14/06/2022",
            data: [
                { name: 'Page A', pv: 2400, amt: 2400 },
                { name: 'Page B', pv: 1398, amt: 2210 },
                { name: 'Page C', pv: 9800, amt: 2290 },
                { name: 'Page D', pv: 3908, amt: 2000 },
                { name: 'Page E', pv: 4800, amt: 2181 },
                { name: 'Page F', pv: 3800, amt: 2500 },
                { name: 'Page G', pv: 4300, amt: 2100 }
            ]
        },
        {
            date: "15/06/2022",
            data: [
                { name: 'Page A', pv: 2400, amt: 2400 },
                { name: 'Page B', pv: 1398, amt: 2210 },
                { name: 'Page C', pv: 9800, amt: 2290 },
                { name: 'Page D', pv: 3908, amt: 2000 },
                { name: 'Page E', pv: 4800, amt: 2181 },
                { name: 'Page F', pv: 3800, amt: 2500 },
                { name: 'Page G', pv: 4300, amt: 2100 }
            ]
        },
        {
            date: "16/06/2022",
            data: [
                { name: 'Page A', pv: 2400, amt: 2400 },
                { name: 'Page B', pv: 1398, amt: 2210 },
                { name: 'Page C', pv: 9800, amt: 2290 },
                { name: 'Page D', pv: 3908, amt: 2000 },
                { name: 'Page E', pv: 4800, amt: 2181 },
                { name: 'Page F', pv: 3800, amt: 2500 },
                { name: 'Page G', pv: 4300, amt: 2100 }
            ]
        }
    ];

    return res.status(200).json({
        data: data
    })
})

app.listen(8080, () => console.log("Serve is running 🐱‍🏍"))