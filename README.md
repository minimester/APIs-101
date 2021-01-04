# APIs 101

During this workshop, we will cover the following topics:

1. [Getting Set Up](#getting-set-up)
1. [I Do - Introduction to SQL and PostgreSQL](./1-Introduction-to-SQL-and-PostgreSQL/)
1. [We Do - Introduction to ExpressJS](./2-Introduction-to-ExpressJS/)
1. [We Do - Creating a Movie API](./3-Creating-Movie-Api/)

## Getting Set Up

### Ensure Postgres is running

<details>
<summary>macOS/Linux</summary>
<br>

1. Download [Postgres.app](https://postgresapp.com) and move it to your `Applications` folder.

1. Open *Postgres.app* and click on *Initialize* to start your server.

    ![postgres home page](./images/postgres/postgres-open.png)

1. Click *Initialize*. After that you will see `Running` with a green checkmark.

    ![postgres initialized](./images/postgres/postgres-initialize.png)

1. The server is now running with the following default settings:

    - Host: `localhost`
    - Port: `5432`
    - User: *Your system username*
    - Database: *Your system username*
    - Password: *None*
    - Connection URL: `postgresql://localhost`

</details>
<br>

<details>
<summary>Windows</summary>
<br>

1. Go to [postgresql.org/download/windows](https://www.postgresql.org/download/windows/).

2. Click Download the installer in the Interactive installer by EDB section

3. Select the Windowsx86-64 option for the most recent version of Postgres 14

4. Run the installer with all default values

5. Feel free to install all selected values - PostgreSQL Server, pgAdmin 4, Stack Builder and Command Line Tools

6. When prompted to enter a password, we recommend using the password “postgres” for the super user as this is a typical value for local development.

7. When the install is finished, uncheck the Launch Stack Builder at exit box and finish.

8. Open Windows Service Manager and ensure the postgresql service is started

9. Your server will run with the following default settings:

    - Host: `localhost`
    - Port: `5432`
    - User: `postgres`
    - Database: `postgres`
    - Password: `postgres`
    - Connection URL: `postgresql://localhost`

</details>
<br>

### Get set up with PgAdmin

PgAdmin is used to run queries on our postgres database.

1. Download [PgAdmin](https://www.pgadmin.org/download/). Select the latest release for your platform.

1. Open *PgAdmin*.

    ![pg admin homepage](./images/pgadmin/pgadmin-open.png)

1. Right-click *Servers* and select *Register > Server*.

    ![pg admin add server](./images/pgadmin/pgadmin-register.png)

1. Give your server a name (I name mine *MyPostgresServer*).

    ![pg admin server name](./images/pgadmin/pgadmin-name.png)

1. Enter the connection information from your PostgreSQL installation.

    ![pg admin connection](./images/pgadmin/pgadmin-connection.png)

1. Click *Save*. You should now see your new server in the *Servers* list on the left.

    ![pg admin dashboard](./images/pgadmin/pgadmin-list.png)

1. For Lab 1 we will use the *Query Tool*. Click the *Query Tool* button (see below) to open it.

    ![pg admin query tool 1](./images/pgadmin/postgres-query-tool-open.png)

    ![pg admin query tool 2](./images/pgadmin/postgres-query-tool-show.png)

1. Type `SELECT 1=1 as HEALTH_CHECK` and press the Play button (&#9658;) to execute the query.

    ![pg admin validate 1](./images/pgadmin/pgadmin-query-tool.png)

1. You should see `true` returned.

    ![pg admin validate 2](./images/pgadmin/pgadmin-health-check-passed.png)

     If the server is *NOT* running, you'll see an error. Make sure the server is running.

     ![pg admin error](./images/pgadmin/pgadmin-health-check-failed.png)

### Get set up with Postman

Download [Postman](https://www.postman.com/downloads/) and open the app.

![postman](./images/postman.png)
