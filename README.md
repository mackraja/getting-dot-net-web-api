# getting-dot-net-web-api
Swagger UI, Sample API

# generate Models using Mysql

Provider: Pomelo.EntityFrameworkCore.MySql
Connection String: Server=localhost;Database=gettingstartedtypescript;Uid=root;Pwd=Bohemia00&;

Command
--------
dotnet ef dbcontext scaffold "Server=localhost;Database=;Uid=root;Pwd=" "Pomelo.EntityFrameworkCore.MySql" -o .\Models --verbose