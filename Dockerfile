# Build: genera el sitio estático con Astro
FROM node:24-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
# Variable pública del crédito del footer (opcional): docker build --build-arg PUBLIC_CONTACTO_DEV=549...
ARG PUBLIC_CONTACTO_DEV
ENV PUBLIC_CONTACTO_DEV=$PUBLIC_CONTACTO_DEV
RUN npm run build

# Runtime: nginx sirve la carpeta dist
FROM nginx:1.27-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
HEALTHCHECK --interval=30s --timeout=3s CMD wget -qO- http://127.0.0.1/ >/dev/null || exit 1
