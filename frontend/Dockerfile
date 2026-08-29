# ---- build stage ----
FROM node:22-alpine AS build
WORKDIR /app

# Copy manifests first so `npm ci` is cached and only re-runs when deps change.
# This matters on a 1 vCPU KVM where installs are the slow part of the build.
COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build

# ---- runtime stage ----
# Only the built dist/ ships; node_modules and the toolchain stay in the build stage.
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
