const express = require('express');
const app = express();
const port = 3000;

app.use(express.json()); // to parse JSON body

let items = [
  {
    name: "redmi",
    price: 10000,
    ram: 4,
    storage: 64
  },
  {
    name: "samsung",
    price: 10000,
    ram: 4,
    storage: 128
  },
  {
    name: "iphone",
    price: 120000,
    ram: 8,
    stroage: 128
  },
  {
    name: "vivo",
    price: 52000,
    ram: 12,
    stroage: 256
  }
];

// 📥 GET all items
app.get('/api/items', (req, res) => {
  res.json(items);
});

// 📥 GET one item
app.get('/api/items/:id', (req, res) => {
  const item = items.find(i => i.id === parseInt(req.params.id));
  if (!item) return res.status(404).send('Item not found');
  res.json(item);
});

// ➕ POST a new item
app.post('/api/items', (req, res) => {
  const newItem = {
    id: items.length + 1,
    name: req.body.name
  };
  items.push(newItem);
  res.status(201).json(newItem);
});

// ✏️ PUT (update) an item
app.put('/api/items/:id', (req, res) => {
  const item = items.find(i => i.id === parseInt(req.params.id));
  if (!item) return res.status(404).send('Item not found');
  item.name = req.body.name;
  res.json(item);
});

// ❌ DELETE an item
app.delete('/api/items/:id', (req, res) => {
  items = items.filter(i => i.id !== parseInt(req.params.id));
  res.send('Deleted');
});

// 🚀 Start server
app.listen(port, () => {
  console.log(`API running at http://localhost:${port}`);
});
