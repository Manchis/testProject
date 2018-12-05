FROM :node:lts-alpine


ADD app.js /app.js
ENTRYPOINT ["node", "app.js"]
