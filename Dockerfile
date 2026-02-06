FROM oven/bun:1-alpine

WORKDIR /app

# Copy package files
COPY package.json bun.lock ./

# Install dependencies
RUN bun install

# Copy source
COPY . .

# Expose port
EXPOSE 3000

# Start
CMD ["bun", "run", "start"]
