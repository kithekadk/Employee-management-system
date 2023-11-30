import http from 'k6/http'
import {sleep} from 'k6'

export const options = {
    stages:[
        {duration: '20s', target: 2000},
        {duration: '30s', target: 100},
        {duration: '20s', target: 3000},
        {duration: '30s', target: 0},
    ],
    thresholds :{
        http_req_failed: ['rate< 0.01'],
        http_req_duration: ['p(90) < 200']
    }
}

export default function(){
    http.get('http://localhost:4400/projects/')
    sleep(1)
}