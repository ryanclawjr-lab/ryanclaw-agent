#!/bin/bash
# RyanClaw Agent Deployment Script
# Deploy to Railway from GitHub

set -e

echo "🚀 Deploying RyanClaw Agent to Railway..."
echo ""

# Check if logged in
if ! railway whoami &>/dev/null; then
    echo "📝 Please login to Railway first:"
    echo "   railway login"
    echo ""
    echo "Or deploy via Railway Dashboard:"
    echo "   1. Go to https://railway.app"
    echo "   2. Connect your GitHub repo: github.com/ryanclawjr-lab/ryanclaw-agent"
    echo "   3. Deploy!"
    exit 1
fi

# Deploy
echo "🔄 Deploying..."
railway up

echo ""
echo "✅ Deployment initiated!"
echo ""
echo "📝 After deployment, your agent will be available at:"
echo "   https://ryanclaw-agent.up.railway.app/entrypoints"
echo ""
echo "🔧 To configure custom domain:"
echo "   railway domain set ryanclaw.agent"
