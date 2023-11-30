import http from 'k6/http'
import {sleep} from 'k6'

export const options = {
    stages:[
        {duration: '2h', target: 100},
        {duration: '10s', target: 0},
    ],
    thresholds :{
        http_req_failed: ['rate< 0.01'],
        http_req_duration: ['p(90) < 200', 'p(95) < 500', 'p(99) < 1500']
    }
}

export default function(){
    http.get('http://localhost:4400/projects/')
    sleep(1)
}