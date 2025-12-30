const express = require('express');
const path = require('path');

//const webpack = require('webpack');
//const webpackDevMiddleware = require('webpack-dev-middleware');
//const cors = require('cors');
//const puppeteer = require('puppeteer');

//import {fileURLToPath} from "url";

//import path from "path";
//const puppeteer = require('puppeteer');




//const __filename = fileURLToPath(import.meta.url);
//const __dirname = path.dirname(__filename);

const app = express();

//app.use(express.urlencoded({extended: true}));

app.get("/", (req, res) => {
      console.log("home page sent");
      res.sendFile(path.join(__dirname + "/src/index.html"));
});

//app.use(cors());

//const config = require('./webpack.config.js');
//const compiler = webpack(config);
const corsOptions = {
      origin: 'https://sar10686.corebridge.net/DesignModule/DesignMainQueue.aspx',
      optionsSuccessStatus: 200,
};

let storedData;
/*
(async () => { 
      const browser = await puppeteer.launch({
            headless: false,
            defaultViewport: false,
      });

      const page = await browser.newPage();
      await page.goto("https://sar10686.corebridge.net/DesignModule/DesignMainQueue.aspx", {
            waitUntil: "load",
            timeout: 0
      });
      await page.waitForSelector('input[id=txtUsername]');
      await page.type('#txtUsername', 'tristan');
      await page.type('#txtPassword', 'tristan10x');
      await page.keyboard.press('Enter');
      await page.waitForNavigation();

      page.on('response', async response => {
            const url = response.url();
            try {
                  const req = response.request();
                  const orig = req.url();
                  const status = response.status();
                  if(orig == "https://sar10686.corebridge.net/SalesModule/Orders/OrderProduct.asmx/GetOrderProductQueueEntriesPaged") {
                        let v = await response.json();
                        console.log(v.d.QueueEntries);
                        storedData = v.d.QueueEntries;
                  }
            } catch(err) {
                  console.error(`Failed getting data from: ${url}`);
                  console.error(err);
            }
      });



})();
*/
//app.use(
//      webpackDevMiddleware(compiler, {
//            publicPath: config.output.publicPath,
//      })
//);

app.use("/cbdata", (req, resp) => {
      resp.status(200).json(storedData);
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, function() {
      console.log('Example app listening on port ' + PORT + '!\n');
});