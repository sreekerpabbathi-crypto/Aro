// scratch/build_audited_catalog.cjs
// Comprehensive audited dataset generator for 39 real Hyderabad restaurants
const fs = require('fs');
const path = require('path');

const { CUISINES } = require('./build_dataset.cjs');

// Stable UUID helpers
function getRestaurantUUID(index) {
  if (index === 1) return 'b0000001-0000-0000-0000-000000000001';
  if (index === 2) return 'b0000002-0000-0000-0000-000000000002';
  if (index === 3) return 'b0000003-0000-0000-0000-000000000003';
  if (index === 4) return 'b0000004-0000-0000-0000-000000000004';
  const padEnd = String(index).padStart(12, '0');
  return `b0000000-0000-0000-0000-${padEnd}`;
}

function getCategoryUUID(resIndex, catIndex) {
  const r = String(resIndex).padStart(4, '0');
  const c = String(catIndex).padStart(4, '0');
  return `ca000000-0000-0000-${r}-${c.padStart(12, '0')}`;
}

function getMenuItemUUID(globalItemIndex) {
  const pad = String(globalItemIndex).padStart(12, '0');
  return `d0000000-0000-0000-0000-${pad}`;
}

function getOptionGroupUUID(globalGroupIndex) {
  const pad = String(globalGroupIndex).padStart(12, '0');
  return `e0000000-0000-0000-0000-${pad}`;
}

function getOptionUUID(globalOptionIndex) {
  const pad = String(globalOptionIndex).padStart(12, '0');
  return `f0000000-0000-0000-0000-${pad}`;
}

function escapeSql(str) {
  if (typeof str !== 'string') return str;
  return str.replace(/'/g, "''");
}

module.exports = {
  getRestaurantUUID,
  getCategoryUUID,
  getMenuItemUUID,
  getOptionGroupUUID,
  getOptionUUID,
  escapeSql,
  CUISINES
};
