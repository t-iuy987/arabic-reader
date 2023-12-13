# Arabic Reader

## Description
Arabic Reader consists of two main components: the Spring Boot-based Arabic Dictionary and the Reader MERN (MongoDB, Express.js, React, Node.js) application for enhancing the reading experience of non-native Arabic readers.

# Table of Contents

1. [Arabic Reader](#arabic-reader)  
    1.1. [Description](#description)
2. [Dictionary (Spring Boot)](#dictionary-spring-boot)  
    2.1. [Prerequisites](#prerequisites)  
    2.2. [Dependencies](#dependencies)  
    2.3. [Backend Configuration (application.properties)](#backend-configuration-applicationproperties)  
    2.4. [Frontend (Java Server Pages - JSP)](#frontend-java-server-pages---jsp)  
    2.5. [Deployment Instructions](#deployment-instructions)
3. [Reader (MERN)](#reader-mern)  
    3.1. [Prerequisites](#prerequisites-1)  
    3.2. [Installation](#installation)  
    3.3. [Running the Application](#running-the-application)  
    3.4. [Deployment Instructions](#deployment-instructions-1)  
4. [Additional Information](#additional-information)


### Dictionary (Spring Boot)
The Dictionary component is a Spring Boot application integrated with Java Server Pages (JSP) and a MySQL database, serving as a root-based Arabic dictionary.

#### Prerequisites
- Java 20
- MySQL Database

#### Dependencies
- Spring Boot 3.1.2
- AlKhalilMorphoSys2.jar
- ADAT-Racineur.v1.20180101.jar
- commons-text 1.10.0
- mssql-jdbc 12.1.0.jre11-preview
- jaxb-api 2.3.0

#### Backend Configuration (application.properties)
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
#### Frontend (Java Server Pages - JSP)
The frontend components are built using JSP, located in the `/WEB-INF/jsp/` directory.

#### Deployment Instructions
1. Clone the repository locally: `git clone https://github.com/t-iuy987/arabic-reader.git`
2. Open the Dictionary project in your preferred IDE.
3. Configure the `application.properties` file with your MySQL credentials.
4. Build the project using Maven.
5. Run the Spring Boot application.
6. Access the dictionary through a web browser at: `http://localhost:9876`

### Reader (MERN)
The Reader component is a MERN (MongoDB, Express.js, React, Node.js) application.

#### Prerequisites
- Node.js
- npm/yarn
- MongoDB
#### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/t-iuy987/arabic-reader.git
    cd arabic-reader
    ```

2. Install dependencies for the frontend:

    ```bash
    cd frontend
    npm install
    ```

3. Install dependencies for the backend:

    ```bash
    cd ../backend
    npm install
    ```
#### Running the Application

1. Start the backend server:

    ```bash
    cd backend
    nodemon server.js
    ```

2. Start the frontend server:

    ```bash
    cd frontend
    npm start
    ```
#### Deployment Instructions
1. Clone the repository locally: `git clone https://github.com/t-iuy987/arabic-reader.git`
2. Open the Reader folder in your preferred code editor.
3. Navigate to the `frontend` and `backend` folders and install dependencies using `npm install`.
4. Run the frontend and backend servers separately.
5. Access the Reader application through a web browser at: `http://localhost:3000`

## Additional Information
- To ensure the full functionality of the application, it's essential to have the dictionary web service running and accessible.
- Ensure all dependencies are properly set up in each project.
- For any further questions or support, please contact @tiuy-987.
