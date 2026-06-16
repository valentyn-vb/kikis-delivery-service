import sql from "./lib/db/sql";

export async function register() {
  await sql`CREATE TABLE IF NOT EXISTS deliveries (
      id SERIAL PRIMARY KEY,
      pickup TEXT NOT NULL,
      destination TEXT NOT NULL,
      status TEXT NOT NULL
    )`;
}
