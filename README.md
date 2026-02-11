# KrumpAgent 🕺

> *World-class agentic dance engineering for the Krump community.*

An OpenClaw-based AI agent system designed to train, compete, and verify Krump dance using agentic engineering principles.

## Vision

Make Krump a billion-dollar tech industry by 2027 through autonomous AI agents that:

- **Train** daily using deep Krump knowledge (history, technique, character)
- **Compete** in online battles on Moltbook with community voting
- **Verify** moves and choreography on-chain via x402 micro-payments
- **Earn** USDC through verification services, competitions, and tips

## Architecture

```
┌─────────────────────────────────────────────────────┐
│               KrumpAgent (OpenClaw)                │
│  • Krump skill  • KrumpClaw skill  • Dance Verify │
└─────────────────────────────────────────────────────┘
                          │
        ┌─────────────────┼─────────────────┐
        ▼                 ▼                 ▼
   ┌─────────┐      ┌──────────┐     ┌─────────┐
   │ Moltbook│      │   x402   │     │  On-Chain│
   │   API   │      │ Payments │     │   USDC   │
   └─────────┘      └──────────┘     └─────────┘
```

## Components

- **KrumpSkill** (`skills/krump`) – Knowledge base of Krump foundations, history, move library, and cultural context.
- **KrumpClawSkill** (`skills/krumpklaw`) – Integration with Moltbook for lab sessions, Saturday battles, and league participation.
- **DanceVerify** (external service) – API for move verification and attribution via x402 (see https://github.com/arunnadarasa/dance-verify).
- **Agent Config** (`agent.yaml`) – OpenClaw agent configuration and tool definitions.

## Quick Start

### 1. Install OpenClaw

Follow the official guide: https://docs.openclaw.ai

Ensure you have:
- Node.js 20+
- npm or yarn
- A VPS or local server to run the agent

### 2. Clone and Install Skills

```bash
# Clone this repo
git clone https://github.com/arunnadarasa/krump-agent.git
cd krump-agent

# Install ClawHub CLI
npm i -g clawhub

# Install required skills into ./skills
clawhub install krump --dir ./skills
clawhub install krumpklaw --dir ./skills --force
```

### 3. Configure Environment

Copy `.env.example` to `.env` and fill in:

```bash
# Moltbook API credentials (required for KrumpClaw)
MOLTBOOK_API_KEY=your_key_here
MOLTBOOK_PROFILE=https://moltbook.com/u/YourAgentName

# Optional: Dance Verify endpoint
DANCE_VERIFY_URL=https://your-dance-verify-instance.com

# OpenClaw config
OPENCLAW_MODEL=openrouter/stepfun/step-3.5-flash:free
```

### 4. Register the Agent with OpenClaw

```bash
# Add the agent (point to this workspace)
openclaw agents add --workspace . --name krump-agent --agent-dir .
```

### 5. Start the Agent

You can run the agent in two ways:

**Option A: Interactive (foreground)**
```bash
openclaw agent --name krump-agent --message "Hello"
```

**Option B: Attach to a Channel (e.g., webchat, discord)**
```bash
# Bind the agent to a channel
openclaw agents bind --agent krump-agent --channel webchat
# Then send messages to that channel to trigger the agent
```

**Option C: Schedule Daily Labs (cron)**
```bash
openclaw cron add --name "daily-lab" --cron "0 9 * * *" --system-event "Post your daily lab session" --session-target krump-agent
```

See `scripts/` for example tasks.

## Agent Configuration

The agent is defined in `agent.yaml`. It loads the Krump and KrumpClaw skills and provides a system prompt that emphasizes:

- Strict adherence to Krump culture and history
- Authentic character development
- Respect for lineage and the Fam system
- Kindness over everything (🔥)

Example tools available:

- `get_krump_knowledge(query)` – Search Krump knowledge base
- `post_lab_session(topic, content)` – Share daily training on Moltbook
- `get_saturday_session()` – Retrieve current battle thread
- `submit_battle_round(content)` – Post your round for voting
- `verify_move(move_name, style, video_url?)` – Verify move via Dance Verify API
- `check_balance()` – Check agent wallet (optional)

## Daily Workflow

1. **Morning Lab** – Post a training drill focused on a foundational move or concept.
2. **Afternoon Practice** – Generate and refine combos; optionally verify moves.
3. **Evening Session** – Participate in Saturday battles (if scheduled) or review community posts.
4. **League Prep** – Prepare for monthly IKS tournament by sharpening character and kill-off moves.

## Development

- Skills are stored in `skills/`
- Agent config in `agent.yaml`
- Example scripts in `scripts/`
- Tests: `npm test`

Add new tools by extending `agent.yaml` or creating new skill files.

## Roadmap

- [ ] Integrate direct x402 payment calls to Dance Verify
- [ ] Auto-generate Krump choreography from audio input
- [ ] Real-time video analysis for move verification
- [ ] Multi-agent battle simulation (agents competing autonomously)
- [ ] On-chain reputation system using Story Protocol
- [ ] Dashboard for agent performance analytics

## Links

- **Moltbook Krump Community:** https://moltbook.com/m/krump
- **KrumpClaw Submolt:** https://moltbook.com/m/krumpklaw
- **Dance Verify API:** https://github.com/arunnadarasa/dance-verify
- **Dance OpenClaw:** https://danceopenclaw.lovable.app
- **Asura’s Website:** https://asura.lovable.app
- **Indian Krump Festival:** https://instagram.com/indiankrumpfestivalofficial

## License

MIT © 2026 Arun Nadarasa (Asura)

*"Kindness Over Everything"* 🔥
