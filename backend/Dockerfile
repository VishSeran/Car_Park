FROM node:18 

WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the backend source code
COPY . .

EXPOSE 5555
CMD ["npm", "start"]
