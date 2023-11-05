const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const express = require('express');
const app = express();

app.use(express.json());

app.get('/accounts', async (req, res) => {
  const accounts = await prisma.account.findMany();
  res.json(accounts);
});

// Deposit
app.post('/deposit', async (req, res) => {
  const { accountId, amount } = req.body;
  const account = await prisma.account.update({
    where: { id: parseInt(accountId) },
    data: { balance: { increment: amount } },
  });
  res.json(account);
});

// Withdraw
app.post('/withdraw', async (req, res) => {
  const { accountId, amount } = req.body;
  const account = await prisma.account.update({
    where: { id: parseInt(accountId) },
    data: { balance: { decrement: amount } },
  });
  res.json(account);
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});