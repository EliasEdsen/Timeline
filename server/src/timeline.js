global.config         = require('../config.json')
global.config.version = JSON.stringify(require('../package.json').version);

global.express = require('express');
global.app     = express();

global.cluster = require('cluster');

global._ = require('lodash')
_.mixin({
  isExist:   ((value)           => !_.isNil(value)),
  constrain: ((value, min, max) => value < min ? min : value > max ? max : value)
});

global.async = require('async')

global._redis = require('redis');
global.REDIS  = _redis.createClient(config.rd);
(async () => { await REDIS.connect(); })();

const { Pool, Client } = require('pg')
global.POSTGRES = new Pool(config.db)

// require('./managers/Managers.js');
// require('./controllers/Controllers.js');

if (cluster.isMaster) {
  // require('./master/Master.js');

  let os = require('os');
  this.cpuCount = os.cpus().length;

  for (let i = 0; i < this.cpuCount; i++) {
    cluster.fork();
  }

  cluster.on('exit', (Worker, code, signal) => {
    console.info(`Worker (ID:${Worker.id}) died. Code: ${code}. Signal: ${signal}`);
    cluster.fork();
  });

} else {
  // require('./worker/Worker.js');

  app.listen(config.server.port, () => {
    console.info(`Worker (ID:${cluster.worker.id}, PID:${process.pid}, PPID:${process.ppid}) listening the app on port ${config.server.port}`);

    app.route('*')
      .all((req, res) => {
        let data = {hello: 'world'}
        res.status(200).header('Access-Control-Allow-Origin', req.headers.origin).header('Access-Control-Allow-Credentials', true).send(JSON.stringify(data));
        // return RequestHandlerManager.regular(req, res);
      });
  });
}
