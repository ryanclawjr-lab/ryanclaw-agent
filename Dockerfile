FROM oven/bun:1-alpine

WORKDIR /app

# Copy package files (bun uses bun.lockb)
COPY package.json bun.lockb ./

# Install dependencies
RUN bun install

# Copy source
COPY . .

# Expose port
EXPOSE 3000

# Start
CMD ["bun", "run", "start"]
