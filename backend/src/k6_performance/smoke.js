import http from 'k6/http';
import { sleep, check } from 'k6';

// minimal load
export const options ={
    vus: 1,
    duration: '10s',
    thresholds:{
        http_req_failed: ['rate<0.01'],
        http_req_duration: ['p(95)< 150']
    }
}

export default function(){
    http.get('http://localhost:4400/projects/');
    sleep(1);
}