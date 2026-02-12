#!/usr/bin/env node
// Tool: Generate code/text via OpenRouter
// Usage: node openrouter_generate.js "prompt" [model] [temperature] [max_tokens]
// Output: prints generated text to stdout

const fetch = globalThis.fetch;

const [,, prompt, model = 'openrouter/qwen/qwen3-coder:free', temperature = '0.3', max_tokens = '4096'] = process.argv;

if (!prompt) {
  console.error('Usage: openrouter_generate.js "prompt" [model] [temperature] [max_tokens]');
  process.exit(1);
}

// Load .env from workspace
const fs = require('fs');
const path = require('path');
const envPath = path.join(__dirname, '..', '.env');
if (fs.existsSync(envPath)) {
  const env = {};
  fs.readFileSync(envPath, 'utf8').split('\n').forEach(line => {
    const [key, ...val] = line.split('=');
    if (key && val) env[key.trim()] = val.join('=').trim();
  });
  if (!env.OPENROUTER_API_KEY) {
    console.error('OPENROUTER_API_KEY not set in .env');
    process.exit(1);
  }
  // Set for this process
  process.env.OPENROUTER_API_KEY = env.OPENROUTER_API_KEY;
} else {
  console.error('.env not found');
  process.exit(1);
}

async function generate() {
  const res = await fetch('https://openrouter.ai/api/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.OPENROUTER_API_KEY}`,
      'Content-Type': 'application/json',
      'HTTP-Referer': 'https://openclaw.ai',
      'X-Title': 'LovaDance Agent'
    },
    body: JSON.stringify({
      model,
      messages: [{ role: 'user', content: prompt }],
      temperature: parseFloat(temperature),
      max_tokens: parseInt(max_tokens)
    })
  });

  if (!res.ok) {
    const err = await res.text();
    console.error(`OpenRouter error ${res.status}: ${err}`);
    process.exit(1);
  }

  const data = await res.json();
  const content = data.choices[0].message.content;
  console.log(content);
}

generate().catch(err => {
  console.error('Fatal:', err);
  process.exit(1);
});
