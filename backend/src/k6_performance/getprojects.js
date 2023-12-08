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

