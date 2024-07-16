FROM node:18
WORKDIR /app
COPY package.json /app
RUN javac Demo.java
COPY . .
CMD ["java", "Demo"]
