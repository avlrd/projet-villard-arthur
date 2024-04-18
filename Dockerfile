# ==============================
#           FRONTEND
# ==============================
FROM node:20 as builder-frontend

# Set working directory
WORKDIR /app

# Install pnpm
RUN npm install -g pnpm

# Copy project folder
COPY frontend /app

# Build Angular project
RUN pnpm i && NODE_ENV=production pnpm run build

# ==============================
#           BACKEND
# ==============================
FROM node:20 as builder-backend

# Set working directory
WORKDIR /app

# Install pnpm
RUN npm install -g pnpm

# Copy project folder
COPY backend /app

# Build backend project
RUN pnpm i && NODE_ENV=production pnpm run build

# ==============================
#         FINAL IMAGE
# ==============================
FROM node:20

RUN apt-get update && apt-get install -y supervisor nginx
RUN mkdir -p /var/log/supervisor
COPY docker/supervisord.conf /etc/supervisor/conf.d/supervisord.conf

# Copy projects
COPY --from=builder-frontend /app/dist/projet-web/browser/ /var/www/html
COPY --from=builder-backend /app/build /app/backend

# Set working directory
WORKDIR /app/backend
# Install dependencies
RUN npm ci --production


# Copy nginx configuration
COPY docker/nginx.conf /etc/nginx/nginx.conf

ENV NODE_ENV production
ENV HOST 0.0.0.0
ENV PORT 3333
ENV LOG_LEVEL info

# Expose port
EXPOSE 80

# Start supervisor
CMD ["/usr/bin/supervisord"]