import postgres from "postgres";

const sql = postgres(process.env.DATA_BASE_URL!);

export default sql;
