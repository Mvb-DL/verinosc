import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const roots = [
  "src",
  "public",
  "next.config.js",
  ".next/server/app",
  ".next/static/chunks/app",
  "out",
  "dist",
  "build",
];

const forbidden = [
  /ledg/i,
  /ledgit/i,
  /ledg\.it/i,
  /ledg\.it\.com/i,
];

const ignoredDirectories = new Set([
  ".git",
  "node_modules",
  ".next/cache",
]);

const textExtensions = new Set([
  ".css",
  ".html",
  ".js",
  ".json",
  ".jsx",
  ".mjs",
  ".svg",
  ".ts",
  ".tsx",
  ".txt",
  ".xml",
]);

const findings = [];

function shouldIgnore(path) {
  return [...ignoredDirectories].some((ignored) => path === ignored || path.startsWith(`${ignored}/`));
}

function isTextFile(path) {
  const dot = path.lastIndexOf(".");
  if (dot === -1) return false;
  return textExtensions.has(path.slice(dot).toLowerCase());
}

function scanFile(path) {
  if (!isTextFile(path)) return;

  const content = readFileSync(path, "utf8");
  const lines = content.split(/\r?\n/);

  lines.forEach((line, index) => {
    if (forbidden.some((pattern) => pattern.test(line))) {
      findings.push(`${relative(process.cwd(), path)}:${index + 1}: ${line.trim()}`);
    }
  });
}

function scanPath(path) {
  if (!existsSync(path) || shouldIgnore(path)) return;

  const stats = statSync(path);

  if (stats.isDirectory()) {
    for (const entry of readdirSync(path)) {
      scanPath(join(path, entry));
    }
    return;
  }

  scanFile(path);
}

for (const root of roots) {
  scanPath(root);
}

if (findings.length > 0) {
  console.error("Forbidden de-association strings found:");
  console.error(findings.join("\n"));
  process.exit(1);
}

console.log("No forbidden de-association strings found.");
