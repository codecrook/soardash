import { JSONFilePreset } from "lowdb/node";
import path from "path";
import { v4 as uuid } from "uuid";

// Define the database schema type
type Schema = {
  transactions: Transaction[];
  categories: TransactionCategory[];
  cards: Card[];
};

// Configure lowdb
const defaultData: Schema = { transactions: [], categories: [], cards: [] };
const dbPath = path.join(process.cwd(), "db", "data.json");

// Get or create database instance
export const getDB = async () => {
  const db = await JSONFilePreset<Schema>(dbPath, defaultData);

  return db;
};

// Helper function to get all transactions
export async function getTransactions(): Promise<Transaction[]> {
  const db = await getDB();

  return db.data.transactions;
}

// Helper function to get all categories
export async function getCategories(): Promise<TransactionCategory[]> {
  const db = await getDB();

  return db.data.categories;
}

// Helper function to save a transaction
export async function saveTransaction(
  transaction: Omit<Transaction, "id">,
): Promise<Transaction> {
  const db = await getDB();

  const newTransaction: Transaction = {
    ...transaction,
    id: uuid(),
  };

  db.data.transactions.push(newTransaction);
  await db.write();

  return newTransaction;
}

// Helper function to update a transaction
export async function updateTransaction(
  id: string,
  updates: Partial<Transaction>,
): Promise<Transaction | null> {
  const db = await getDB();

  const index = db.data.transactions.findIndex((t) => t.id === id);
  if (index === -1) return null;

  db.data.transactions[index] = {
    ...db.data.transactions[index],
    ...updates,
  };
  await db.write();

  return db.data.transactions[index];
}

// Helper function to save a card
export async function saveCard(card: Omit<Card, "id">): Promise<Card> {
  const db = await getDB();
  const newCard: Card = { ...card, id: uuid() };

  db.data.cards.push(newCard);
  await db.write();

  return newCard;
}

// Helper function to get all cards
export async function getCards(): Promise<Card[]> {
  const db = await getDB();

  return db.data.cards;
}
