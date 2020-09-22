# Rest API Test

One of many practice for a NodeJs Rest Api using Passport JS and JWT as Authentication.

## Requirements

* MongoDB
* Run NPM Install


## Database 

Start mongo DB service

```sh
sudo systemctl start mongod
```

## Api Routes

| Request | Address |
| ------ | ------ |
| GET | localhost:3000/ |
| GET | localhost:3000/users/list |
| POST | localhost:3000/users/create|
| POST | localhost:3000/users/login |

To test the API, Postman or similar is recommended. Set Content-Type as "application/x-www-form-urlencoded" in "Headers" and "Body" as "x-www-form-urlencoded"