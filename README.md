# z-prefix-app

### FIRST STEPS
1. type in "docker-compose up" in the terminal to get our container up and running for our database.

2. Open another terminal instance and type in "docker exec -it "container" bash" to access our container. DO NOT close the previous terminal, all the terminals we create we will keep open.

3. From the integrated terminal type in "psql -U password" so that we can work inside of it as a user and add data tables.

4. From here we will create our database by typing "CREATE DATABASE "name"". I like to use the name "inventory" here.

5. Next we will connect to our data base by using the command "\c "database"".

### MIGRATIONS and SEEDs
6. Our next step is to then populate the data table with our seed data. Follow the next sequence of steps to populate our empty database with useful tables.

7. Open another terminal instance and in there cd into our backend directory.

8. From there type "npx knex migrate:latest" and "npx knex seed:run" in that order. Our database should be populated with four tables now. You can verify this step by going back into the previous terminal we used to enter into the integrated terminal and type in "\dt"

### Starting our servers
9. Now that we have our database setup, we can now spin up our servers. Create two new terminals and cd into the backend folder in one and the frontend folder in the other. Type in the command "npm start" to spin up our frontend and backend servers.

### Using our website
10. With the live servers up and running, go into our frontend react application. You should see our initial item from when we seeded our data in the main body, and a "Home" and "login" button in the header. 

11. If you click on "login" it will take you to the page to login with existing credentials. An available one is the username "BuzzBuzz", however if you want to register a new account you can click on the link below the text field to do so.

12. Registering a new account. To register is simple, no password is needed, just your first name, last name, and a username that you will use to login with later. After you hit submit you should automatically be redirected to the login page. Use the username you just created to login (it IS case sensitive).

13. After logging in you should see some differences in the webpage now. One the login link is now gone, since you are already logged in, and two you have a couple new buttons and an informational message. 

14. The "Add Item" button will take you to a new page where you fill out a form to add new items to your inventory. Once you hit submit the website will submit a POST request and add your submission into the database. Your new item will also be displayed in the home page.

15. If you click on an item in the home page it will take you to a more detailed page of that specific item. In this page, and if you are logged in as a user, you have two additional buttons, an "edit" button and a "remove" button. The edit button is tied to a patch/put request and will edit the fields you interact with. If you leave a field blank it will just leave it alone and not change anything. The remove button just deletes that specific item from our database.