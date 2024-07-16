FROM openjdk:latest
WORKDIR /app
COPY . .
RUN javac Demo.java
CMD ["java", "Demo"]
