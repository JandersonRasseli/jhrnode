async function connect() {
    if (global.connection)
        return global.connection.connect();

    const { Pool } = require('pg');
    const pool = new Pool({
        connectionString: 'postgres://ndfhmwut:VGfN3rSoehzS7_D7PtAnozoFnDWfLBcM@kesavan.db.elephantsql.com/ndfhmwut'
    });

    //apenas testando a conexão
    const client = await pool.connect();
    console.log("Criou pool de conexões no PostgreSQL!");

    const res = await client.query('SELECT NOW()');
    console.log(res.rows[0]);
    client.release();

    //guardando para usar sempre o mesmo
    global.connection = pool;
    return pool.connect();
}

async function selectCustomers() {
    const client = await connect();
    const res = await client.query('SELECT * FROM clientes');
    return res.rows;
}

module.exports = { selectCustomers }
