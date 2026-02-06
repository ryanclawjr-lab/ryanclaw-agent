# RyanClaw Agent Deployment Guide

## Quick Deploy to Railway

### Option 1: Railway Dashboard (Recommended)

1. **Go to Railway Dashboard**
   - https://railway.app/dashboard

2. **Create New Project**
   - Click "New Project"
   - Select "Deploy from GitHub repo"

3. **Connect Repository**
   - Select: `ryanclawjr-lab/ryanclaw-agent`
   
4. **Configure Environment**
   - Go to "Variables" tab
   - Add:
     ```
     AGENT_NAME=RyanClaw
     AGENT_DESCRIPTION=Autonomous AI agent with security-first approach
     AGENT_VERSION=0.1.0
     AGENT_DOMAIN=your-domain.com (optional)
     ```

5. **Deploy**
   - Click "Deploy"
   - Wait for build & deploy

### Option 2: Railway CLI

```bash
# Install CLI
npm install -g @railway/cli

# Login
railway login

# Init project (in ryanclaw-agent directory)
railway init

# Deploy
railway up
```

## After Deployment

### Get Public URL
```bash
railway domain
```

### Test Agent
```bash
curl https://your-app.railway.app/entrypoints
```

### Configure Custom Domain
```bash
railway domain set ryanclaw.yourdomain.com
```

## Security Notes

✅ **No secrets in repo** - All credentials via environment variables  
✅ **Minimal attack surface** - Only 4 endpoints, no file system access  
✅ **x402 ready** - Payment infrastructure configured for future use  
✅ **ERC-8004 identity** - Agent ID 2079 registered on Base

## Local Development

```bash
# Run locally
cd ~/.openclaw/workspace/ryanclaw-agent
bun run dev

# Test endpoints
curl http://localhost:3000/entrypoints
```
