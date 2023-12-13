# RootExtracterApp

## Description
RootExtracterApp is a software solution developed in Spring Boot integrated with Java Server Pages (JSP) and employing a MySQL database. The application serves as a root-based Arabic dictionary, enhancing the reading experience of non-native Arabic readers. Its primary objective is to eliminate the need for users to consult external dictionaries during Arabic reading sessions by integrating a root-based dictionary within the application.

## Prerequisites
- Java 20
- MySQL Database

## Dependencies
- Spring Boot 3.1.2
- AlKhalilMorphoSys2.jar
- ADAT-Racineur.v1.20180101.jar
- commons-text 1.10.0
- mssql-jdbc 12.1.0.jre11-preview
- jaxb-api 2.3.0

## Backend Configuration (application.properties)
Ensure your MySQL database is running and configure the `application.properties` file located in `src/main/resources` with the following settings:

```properties
spring.mvc.view.prefix = /WEB-INF/jsp/
spring.mvc.view.suffix = .jsp
server.port= 9876

# MySQL Configuration
spring.datasource.url=jdbc:mysql://localhost:5432/arabicurdu
spring.datasource.username=root
spring.datasource.password=123
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver

spring.jpa.hibernate.dialect=org.hibernate.dialect.MySQLDialect
spring.jpa.show-sql=true
spring.jpa.hibernate.ddl-auto=update

spring.jpa.properties.hibernate.format_sql=true
spring.jpa.properties.hibernate.connection.characterEncoding=utf-8
spring.jpa.properties.hibernate.connection.CharSet=utf-8
spring.jpa.properties.hibernate.connection.useUnicode=true

server.tomcat.uri-encoding=UTF-8
spring.http.encoding.charset=UTF-8
spring.http.encoding.enabled=true
spring.http.encoding.force=true

```

## Frontend (Java Server Pages - JSP)
The frontend components are built using JSP, located in the `/WEB-INF/jsp/` directory.

## Deployment Instructions
1. Clone the repository locally: `git clone https://github.com/your-username/RootExtracterApp.git`
2. Open the project in your preferred IDE (IntelliJ IDEA, Eclipse, etc.).
3. Ensure your MySQL database is set up and running.
4. Configure the `application.properties` file with your MySQL credentials.
5. Build the project using Maven.
6. Run the Spring Boot application.
7. Access the application through a web browser at: `http://localhost:9876`

## Additional Information
- The application relies on `AlKhalilMorphoSys2.jar` for fetching roots and tags of Arabic words.
- Ensure all dependencies are properly set up in your project.
- For any further questions or support, please contact [Your Contact Information].