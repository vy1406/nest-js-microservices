
Implementing two microservices that communicate via RabbitMQ
- orders
- billing

#Build:

  docker-compose up --build -V 

#Run:

  docker-compose up

#Examples:
POST | localhost:3000/orders
  body:
  {
    "name": "Shorts",
    "price": 41,
    "phoneNumber": "+15083418375"
  }

- will see console log in billing app the payload in case the transaction was succesfull


Based on Video of Michael Guay
