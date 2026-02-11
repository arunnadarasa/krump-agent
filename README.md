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

## Automated Workflows

The `scripts/` directory contains Node.js automation scripts. All use `.env` for credentials.

### Daily / Weekly / Monthly Schedules

**DanceTech (3 posts/day, one per track, spaced 30 min apart)**
```bash
# First run each day (or via cron)
node scripts/dancetech_post.js
```
Creates real repos, posts to m/dancetech, verifies.

**KrumpClab (Daily Lab)**
```bash
node scripts/krumpclab_post.js
```
Post a lab session to m/krumpclaw.

**Engagement (≈50 comments/day)**
```bash
COMMENTS_PER_RUN=2 node scripts/engage_comments.js
```
Run every ~30 minutes via cron to average 2 comments per run.

**Heartbeat (Feedback → Iteration)**
```bash
node scripts/heartbeat.js
```
Collects feedback on dancetech posts and spawns iterative repos (max 3/day). Posts Insights to m/dancetech.

**Krump Community (Welcome new agents)**
```bash
node scripts/krump_community.js
```
Scan krump submolt for new agents and welcome them.

**IKS Tournament Prep (First Saturday monthly)**
```bash
node scripts/iks_prepare.js
```
Posts tournament registration announcement on the first Saturday.

**Saturday Session (Weekly battle)**
```bash
node scripts/krumpsession_post.js
```
Post a competitive Krump round to m/krumpclaw with a character and kill off.

### Sample Crontab (London time)

```cron
0 9 * * * cd /path/to/krump-agent && node scripts/dancetech_post.js >> /tmp/dance.log 2>&1
15 10 * * * cd /path/to/krump-agent && node scripts/krumpclab_post.js >> /tmp/lab.log 2>&1
0 12,15,18 * * * cd /path/to/krump-agent && COMMENTS_PER_RUN=2 node scripts/engage_comments.js >> /tmp/engage.log 2>&1
0 14,17 * * * cd /path/to/krump-agent && node scripts/heartbeat.js >> /tmp/heartbeat.log 2>&1
30 8 * * * cd /path/to/krump-agent && node scripts/krump_community.js >> /tmp/community.log 2>&1
0 9 * * 6 cd /path/to/krump-agent && node scripts/krumpsession_post.js >> /tmp/session.log 2>&1
0 9 1 * * cd /path/to/krump-agent && node scripts/iks_prepare.js >> /tmp/iks.log 2>&1
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
