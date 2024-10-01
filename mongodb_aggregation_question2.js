import { MongoClient } from "mongodb";

async function runAggregation() {
  const url =
    "mongodb+srv://Mailari:9to2Ra9BDzKyy4Pt@cluster0.hgqe2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
  const dbName = "sales";
  const client = new MongoClient(url);
  try {
    await client.connect();
    const db = client.db(dbName);
    const salesCollection = db.collection("sales");
    const aggregationPipeline = [
      { $unwind: "$items" },
      {
        $group: {
          _id: {
            store: "$store",
            month: { $dateToString: { format: "%Y-%m", date: "$date" } },
          },
          totalRevenue: {
            $sum: { $multiply: ["$items.quantity", "$items.price"] },
          },
          totalQuantity: { $sum: "$items.quantity" },
          prices: { $push: "$items.price" },
        },
      },
      {
        $project: {
          _id: 0,
          store: "$_id.store",
          month: "$_id.month",
          totalRevenue: 1,
          averagePrice: { $divide: ["$totalRevenue", "$totalQuantity"] },
        },
      },
      { $sort: { store: 1, month: 1 } },
    ];

    const results = await salesCollection
      .aggregate(aggregationPipeline)
      .toArray();

    console.log(results);
  } catch (error) {
    console.error("Error running aggregation:", error);
  }
}

runAggregation().catch(console.error);
