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

console.log("=== Running Task 2 Tests: Design System & Hero ===");
try {
    const html = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf-8');
    const css = fs.readFileSync(path.join(__dirname, 'style.css'), 'utf-8');

    // Check Google Fonts links
    assert.ok(html.includes('fonts.googleapis.com'), "Google Fonts link is missing");
    assert.ok(html.includes('Cormorant+Garamond') && html.includes('Plus+Jakarta+Sans'), "Required fonts are missing");
    
    // Check CSS Variables
    assert.ok(css.includes('--bg-primary: #F6F5F2') || css.includes('--bg-primary'), "CSS variable --bg-primary is missing");
    assert.ok(css.includes('--accent-color: #2D4239') || css.includes('--accent-color'), "CSS variable --accent-color is missing");

    // Check Hero semantic container
    assert.ok(html.includes('<header class="hero">'), "Hero element header is missing");
    assert.ok(html.includes('hero__title'), "Hero title class is missing");
    assert.ok(html.includes('hero__image'), "Hero image container is missing");
    
    console.log("PASS: Design System & Hero verified!");
} catch (err) {
    console.error("FAIL:", err.message);
    process.exit(1);
}

