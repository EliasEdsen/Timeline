import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')


window.serverCall = (data, type, path, cb) => {
  let xhr = new XMLHttpRequest();
  // xhr.open(type, `${window.location.origin}/api/statistic/${path}`, true);
  let host = 'localhost' // TODO
  let port = 3345        // TODO
  xhr.open(type, `//${host}:${port}${path}`, true)
  xhr.withCredentials = true;
  xhr.onreadystatechange = serverComplete.bind(this, xhr, cb);
  xhr.send(JSON.stringify(data));
}

function serverComplete (xhr, cb) {
  if (xhr.readyState == 4) {
    return cb(JSON.parse(xhr.response));
  }
}
