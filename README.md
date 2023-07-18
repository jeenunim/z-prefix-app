# z-prefix-app

### FIRST STEPS
1. type in "docker-compose up" in the terminal to get our container up and running for our database.

2. Open another terminal instance and type in "docker exec -it <container> bash" to access our container. DO NOT close the previous terminal, all the terminals we create we will keep open.

3. From the integrated terminal type in "psql -U password" so that we can work inside of it as a user and add data tables.

4. From here we will create our database by typing "CREATE DATABASE <name>". I like to use the name "inventory" here.

5. Next we will connect to our data base by using the command "\c <database>".

### MIGRATIONS and SEEDs
6. Our next step is to then populate the data table with our seed data. Follow the next sequence of steps to populate our empty database with useful tables.

7. Open another terminal instance and in there cd into our backend directory.

8. From there type "npx knex migrate:latest" and "npx knex seed:run" in that order. Our database should be populated with four tables now. You can verify this step by going back into the previous terminal we used to enter into the integrated terminal and type in "\dt"

