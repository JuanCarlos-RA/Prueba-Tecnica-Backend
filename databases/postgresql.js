const { newDb } = require('pg-mem');

const postgresql = newDb();

// create mock data
postgresql.public.none(`create table users(pk_user integer, name text, status boolean);
                        insert into users values (123, 'Juan', true);
                        create table transactions(pk_transaction integer, fk_user integer, description VARCHAR(60) , amount float);
                        insert into transactions values (1, 123, 'Compra de tiquete', 800.0);
                        insert into transactions values (2, 123, 'Devolucion de tiquete', 600.3);
                        insert into transactions values (3, 44, 'Pago de servicio', 100.2);`);


module.exports = {
    postgresql
}