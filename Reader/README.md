# Arabic Reader

A software solution designed to enhance the reading experience of non-native Arabic readers. Its primary objective is to eliminate the need for users to consult external dictionaries when encountering unfamiliar words during their Arabic reading sessions by integrating a root-based dictionary within the reader application.

## Table of Contents

- [Overview](#overview)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Application](#running-the-application)
- [Required Services](#required-services)

## Overview

The Arabic Reader software solution is aimed at improving the reading experience of non-native Arabic readers. It integrates a root-based dictionary directly within the reader application, eliminating the need for users to refer to external dictionaries while reading Arabic texts.

## Prerequisites

Ensure you have the following installed:

- Node.js
- npm/yarn
- MongoDB

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/t-iuy987/arabic-reader.git
    cd your-repo
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

## Configuration

Set up environment variables:

1. Create a `.env` file in the `backend` directory.
2. Add necessary configurations like database URLs, API keys, etc.

## Running the Application

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


## Required Services

The application relies on a dictionary web service implemented in Spring Boot for various functionalities such as:

- **Get Root-Based Meaning**: Retrieves the root-based meaning of Arabic words.
- **Get POS Tags**: Fetches Part-Of-Speech (POS) tags for Arabic words.
- **Generate Glossary**: Generates a glossary of Arabic words and their meanings.
- **Custom Dictionary Operations**: Allows users to perform actions like adding a word to favorites and other custom dictionary operations.

To ensure the full functionality of the application, it's essential to have the dictionary web service running and accessible.
