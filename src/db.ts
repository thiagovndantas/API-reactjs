import { Pool } from "pg";

const connectionString = 'postgres://sgdddmxp:bFCL5QPEE64Z9c0_RpSN2TSvW6V2SlX5@kesavan.db.elephantsql.com/sgdddmxp';

const db = new Pool ({connectionString});

export default db;