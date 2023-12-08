import http from 'k6/http';
import { sleep, check } from 'k6';

export const options ={
    vus: 1,
    duration: '1s'
}

export default function () {

  const body = JSON.stringify({
    email: 'dankinyi99@gmail.com',
    password: '12345678'
  })

  let params = {
    headers: {
        'Content-Type': 'application/json'
    }
  }

  const response = http.post('http://localhost:4400/employee/login', body, params);
//   console.log(response);

  check(response,{
    'is status 200: ': (res)=> res.status == 200,
    'is successfullt logged in': (res)=> res.body.includes('Logged in successfully')
  })

  sleep(1);
}

