# ==============================
#           FRONTEND
# ==============================
FROM node:20 as builder-client

# Set working directory
WORKDIR /app

# Copy project folder
COPY client /app

# Build Angular project
RUN npm i && NODE_ENV=production npm run build

# ==============================
#           BACKEND
# ==============================
FROM node:20 as builder-server

# Set working directory
WORKDIR /app

# Copy project folder
COPY server /app

# Build backend project
RUN npm i && NODE_ENV=production npm run build

# ==============================
#         FINAL IMAGE
# ==============================
FROM node:20

RUN apt-get update && apt-get install -y supervisor nginx
RUN mkdir -p /var/log/supervisor
COPY docker/supervisord.conf /etc/supervisor/conf.d/supervisord.conf

# Copy projects
COPY --from=builder-client /app/dist/projet-web/browser/ /var/www/html
COPY --from=builder-server /app/build /app/server

# Set working directory
WORKDIR /app/server
# Install dependencies
RUN npm ci


# Copy nginx configuration
COPY docker/nginx.conf /etc/nginx/nginx.conf

ENV NODE_ENV production
ENV HOST 0.0.0.0
ENV PORT 3000
ENV LOG_LEVEL info

# Expose port
EXPOSE 80

# Start supervisor
CMD ["/usr/bin/supervisord"]