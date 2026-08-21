import fs from "fs";
import path from "path";

const IGNORE_LIST = new Set([
  "node_modules",
  ".next",
  ".git",
  "package-lock.json",
  ".DS_Store",
]);

const MAX_DEPTH = 4;

function printTree(dirPath, prefix = "", depth = 0) {
  if (depth > MAX_DEPTH) return;

  let items;
  try {
    items = fs.readdirSync(dirPath, { withFileTypes: true });
  } catch (err) {
    console.error(`Помилка читання директорії: ${dirPath}`, err.message);
    return;
  }

  // Фільтруємо виключення
  const filtered = items.filter((item) => !IGNORE_LIST.has(item.name));

  // Сортуємо: спочатку папки, потім файли (в алфавітному порядку)
  filtered.sort((a, b) => {
    if (a.isDirectory() && !b.isDirectory()) return -1;
    if (!a.isDirectory() && b.isDirectory()) return 1;
    return a.name.localeCompare(b.name);
  });

  filtered.forEach((item, index) => {
    const isLast = index === filtered.length - 1;
    const pointer = isLast ? "└── " : "├── ";
    console.log(`${prefix}${pointer}${item.name}${item.isDirectory() ? "/" : ""}`);

    if (item.isDirectory()) {
      const nextPrefix = prefix + (isLast ? "    " : "│   ");
      printTree(path.join(dirPath, item.name), nextPrefix, depth + 1);
    }
  });
}

console.log("\n📦 Структура проєкту (hannatrubabrand):");
console.log(".");
printTree(process.cwd());
console.log("");