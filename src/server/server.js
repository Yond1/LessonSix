const express = require("express");
const router = require("./routes/routes");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 7070;

app.use(cors())
app.use(express.json());
app.use("/api", router);

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
