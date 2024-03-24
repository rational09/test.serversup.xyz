# Use a base image with Java pre-installed
FROM openjdk:23-slim-bullseye

# Set the working directory inside the container
WORKDIR /malhar/app

# Copy the packaged JAR file from the host to the container
#COPY build/libs/my-spring-boot-app-0.0.1-SNAPSHOT-plain.jar /app/malhar/my-spring-boot-app.jar

COPY  build/libs/my-spring-boot-app-0.0.1-SNAPSHOT.jar myapp.jar



# Expose the port that the Spring Boot application will listen on
EXPOSE 9000

# Define the command to run the Spring Boot application when the container starts
CMD ["java", "-jar", "myapp.jar"]

