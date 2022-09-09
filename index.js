const express = require("express");
const app = express();
const cors = require("cors");
require("./db/connection");
const bodyParser = require("body-parser");
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
const port = process.env.PORT || 5000;
const adminRouter = require("./routers/admin");

app.use("/api/adminRouter", adminRouter);
app.listen(port, () => {
  console.log(`LIXENING ON THE PORT ::${port}`);
});
