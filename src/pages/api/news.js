import { MongoClient, ServerApiVersion } from "mongodb";
const uri =
    "mongodb+srv://codemensohag:codemensohag@cluster0.elgj0sl.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
});

async function run(req, res) {
    try {
        await client.connect();
        const newsCollection = client.db("news").collection("news_portal");
        if (req.method === "GET") {
            const allNews = await newsCollection.find({}).toArray();
            res.send({
                message: "success",
                status: 200,
                data: allNews,
            });
        }
    } finally {
        // await client.close();
    }
}

export default run;

