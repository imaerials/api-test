# Rest API Test

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

