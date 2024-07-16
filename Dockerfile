FROM openjdk:latest
WORKDIR /app
COPY package.json /app
RUN javac Demo.java
COPY . .
CMD ["java", "Demo"]
