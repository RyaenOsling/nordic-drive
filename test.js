const fs = require('fs');
const path = require('path');
const assert = require('assert').strict;

console.log("=== Running Task 1 Tests: File Scaffolding ===");
try {
    assert.ok(fs.existsSync(path.join(__dirname, 'index.html')), "index.html is missing");
    assert.ok(fs.existsSync(path.join(__dirname, 'style.css')), "style.css is missing");
    assert.ok(fs.existsSync(path.join(__dirname, 'script.js')), "script.js is missing");
    
    const html = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf-8');
    assert.ok(html.includes('<!DOCTYPE html>'), "HTML Doctype declaration is missing");
    assert.ok(html.includes('<html lang="ru">') || html.includes('<html lang="en">'), "HTML tag or lang is missing");
    assert.ok(html.includes('<link rel="stylesheet" href="style.css">'), "CSS is not linked");
    assert.ok(html.includes('<script src="script.js"'), "JS is not linked");
    
    console.log("PASS: Basic scaffolding verified!");
} catch (err) {
    console.error("FAIL:", err.message);
    process.exit(1);
}
