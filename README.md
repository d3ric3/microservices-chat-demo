# Command List

Start docker containers
1. cd to "microservices-chat-demo" folder
2. run command 
```bash 
docker-compose up
```

Restart docker "users-service" containers
1. cd to backend root folder
2. run command
```bash
docker-compose retart users-service
```

Create Typeorm DB Migration
1. cd to folder "users-service"
2. run command 
```javascript 
yarn typeorm migration:create -n your_migration_name
```

Perform Typeorm DB migration on users-service
1. cd to "users-service" folder
2. run command
```bash
docker-compose exec users-service bash
yarn db:migrate
```