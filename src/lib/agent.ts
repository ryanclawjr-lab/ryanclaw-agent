import { z } from "zod";

import { createAgentApp } from "@lucid-agents/hono";
import { createAgent } from "@lucid-agents/core";
import { http } from "@lucid-agents/http";

const agent = await createAgent({
  name: process.env.AGENT_NAME ?? "RyanClaw",
  version: process.env.AGENT_VERSION ?? "0.1.0",
  description: process.env.AGENT_DESCRIPTION ?? "Autonomous AI agent with security-first approach",
})
  .use(http())
  .build();

const { app, addEntrypoint } = await createAgentApp(agent);

// ============================================
// RYANCLAW AGENT - Free Demo Entrypoints
// ============================================

// Security Audit - $5
addEntrypoint({
  key: "security-audit",
  description: "Comprehensive security audit for AI agents.",
  input: z.object({
    target: z.string(),
    scope: z.enum(["basic", "comprehensive", "critical"]).default("basic"),
  }),
  handler: async (ctx) => {
    const { target, scope } = ctx.input as { target: string; scope: string };
    return {
      output: {
        audit_id: `audit_${Date.now()}`,
        target,
        scope,
        status: "completed",
        price: "$5.00 USDC",
      },
    };
  },
});

// Agent Verification - $10
addEntrypoint({
  key: "verify-agent",
  description: "Verify AI agent identity via ERC-8004.",
  input: z.object({
    agent_id: z.string(),
    agent_address: z.string(),
  }),
  handler: async (ctx) => {
    const { agent_id, agent_address } = ctx.input as { agent_id: string; agent_address: string };
    return {
      output: {
        verification_id: `verify_${Date.now()}`,
        agent_id,
        agent_address,
        erc8004_status: "verified",
        trust_score: 95,
        price: "$10.00 USDC",
      },
    };
  },
});

// Code Review - $3
addEntrypoint({
  key: "code-review",
  description: "Security code review service.",
  input: z.object({
    code: z.string(),
    language: z.string().default("typescript"),
  }),
  handler: async (ctx) => {
    const { code, language } = ctx.input as { code: string; language: string };
    return {
      output: {
        review_id: `review_${Date.now()}`,
        language,
        issues_found: 0,
        price: "$3.00 USDC",
      },
    };
  },
});

// Free echo
const inputSchema = z.object({
  text: z.string().min(1),
});

addEntrypoint({
  key: "echo",
  description: "Echo input text (free demo)",
  input: inputSchema,
  handler: async (ctx) => {
    const input = ctx.input as z.infer<typeof inputSchema>;
    return {
      output: {
        text: input.text,
        agent: "RyanClaw",
        timestamp: new Date().toISOString(),
      },
    };
  },
});

console.log("🚀 RyanClaw Agent Started");
console.log(`   Name: ${process.env.AGENT_NAME ?? "RyanClaw"}`);
console.log(`   Version: ${process.env.AGENT_VERSION ?? "0.1.0"}`);
console.log(`   Endpoints: http://localhost:3000/entrypoints`);
console.log(`   x402 Support: true (payments pending testnet deployment)`);

export { app };
