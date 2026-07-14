// lib/store.js
// Thin wrapper around @vercel/kv. Requires the "KV" storage integration added
// in your Vercel project dashboard (Storage -> Create Database -> KV) —
// that automatically sets KV_REST_API_URL / KV_REST_API_TOKEN for you.

const { kv } = require('@vercel/kv');

const REPORTS_KEY = 'ez:reports';
const ADMINS_KEY = 'ez:admins';

async function getReports() {
  const data = await kv.get(REPORTS_KEY);
  return data || [];
}

async function saveReports(reports) {
  await kv.set(REPORTS_KEY, reports);
}

async function getAdmins() {
  const data = await kv.get(ADMINS_KEY);
  return data || [];
}

async function saveAdmins(admins) {
  await kv.set(ADMINS_KEY, admins);
}

module.exports = { getReports, saveReports, getAdmins, saveAdmins };
