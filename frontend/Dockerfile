FROM node:18

WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the frontend source code
COPY . .

# # Build the app
# RUN npm run build

# # Install serve to run the application
# RUN npm install -g serve

EXPOSE 5173

# Serve the app
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]