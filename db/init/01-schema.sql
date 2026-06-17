CREATE TABLE IF NOT EXISTS deliveries (
  id          BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  pickup      TEXT NOT NULL,
  destination TEXT NOT NULL,
  status      TEXT NOT NULL DEFAULT 'active'
    CHECK (status IN ('active', 'accepted', 'denied', 'fulfilled'))
);

INSERT INTO deliveries (pickup, destination, status) VALUES
  ('Bakery',        'Clock Tower',   'active'),
  ('Harbour',       'Hillside Cafe', 'accepted'),
  ('Bookshop',      'Lighthouse',    'denied'),
  ('Market Square', 'Train Station', 'fulfilled');
