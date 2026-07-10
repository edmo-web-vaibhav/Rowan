
const { MongoClient } = require("mongodb");
const extract = require("./address.json");
const data = extract.row;

const uri = "mongodb+srv://devansh:Password123@cluster0.wamynaq.mongodb.net/";
const BATCH_SIZE = 10;

async function uploadData() {
  const client = new MongoClient(uri);

  try {
    await client.connect();

    const db = client.db("rowandb");
    const collection = db.collection("table");

    for (let i = 0; i < data.length; i += BATCH_SIZE) {
      const batch = data.slice(i, i + BATCH_SIZE);

      try {
        const result = await collection.insertMany(batch);

        if (result.insertedCount === batch.length) {
          console.log(
            `Uploaded ${i + 1} - ${i + batch.length} of ${data.length}`
          );
        } else {
          console.log("Batch upload incomplete");
          break;
        }
      } catch (err) {
        console.error(`Failed at batch starting index ${i}`);
        console.error(err);
        break;
      }
    }

    console.log("Upload completed");
  } finally {
    await client.close();
  }
}

uploadData();