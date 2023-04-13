const server = require("./src/app");
const {conn} = require("./src/db");
const {getApiInfo} = require("./src/controllers/getApiInfo");

const PORT = 3001;

conn.sync({ force: true }).then(() => {
    server.listen(PORT, async () => {
        console.log(`listening on port : ${PORT}`);
      await getApiInfo()
    });
  });