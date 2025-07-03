FROM eclipse-temurin:21 

WORKDIR /appliction
COPY gradlew *.gradle ./
COPY gradle/ ./gradle
COPY src ./src
CMD ["./gradlew","test"]
