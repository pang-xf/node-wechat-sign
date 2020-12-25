const Koa = require("koa");
const cors = require('koa2-cors');
const app = new Koa();
const bodyParse = require("koa-bodyparser");
const router = require("./router");
const util = require("./utils");

app.use(cors());
app.use(bodyParse());
app.use(router.routes());
app.use(router.allowedMethods());

const PORT = 3099
app.listen(PORT, () => {
  console.log(`node-service listening on </b> http://${util.getIPAddress()}:${PORT}`);
});
