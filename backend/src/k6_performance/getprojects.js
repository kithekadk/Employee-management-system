<<<<<<< HEAD
import http from 'k6/http';
import { sleep } from 'k6';

export const options ={
    executor: 'per-vu-iterations',
    iterations: 50,
    vus: 50,
    // duration: '30s'
}

export default function () {
  http.get('http://localhost:4400/projects/');
  sleep(1);
}

=======
import http from 'k6/http'
import {sleep} from 'k6'

export const options = {
    vus: 1000,
    duration: '10s'
}

export default function(){
    http.get('http://localhost:4400/projects/')
    sleep(1)
}
>>>>>>> 6cfe072809d2eac56d8aeae0043e2e5e2b22c448
