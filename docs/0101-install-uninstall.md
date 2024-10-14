---
id: 0101-install-uninstall
title: Install & Uninstall
sidebar_label: Install & Uninstall
---

## Install Guide
> Supports :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,mysql,mariadb,postgresql,sqlserver,db2,tibero,cubrid>)

This chapter covers how to install SQLGate through the setup wizard.

SQL
-- Creating tables for Eventious application

-- Users table
CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(255) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,   

    profile_picture VARCHAR(255),   

    bio TEXT,
    user_type VARCHAR(255) CHECK (user_type IN ('user', 'provider')) NOT NULL
);

-- Providers table
CREATE TABLE providers (
    provider_id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(user_id) NOT NULL
);

-- Portfolio items table
CREATE TABLE portfolio_items (
    item_id SERIAL PRIMARY KEY,
    provider_id INT REFERENCES providers(provider_id) NOT NULL,
    media_type VARCHAR(255) CHECK (media_type IN ('image', 'video')) NOT NULL,
    media_url VARCHAR(255) NOT NULL,
    description TEXT
);

-- Provider services table
CREATE TABLE provider_services (
    provider_id INT REFERENCES providers(provider_id) NOT NULL,
    service_id INT REFERENCES services(service_id) NOT NULL
);

-- Placeholders table
CREATE TABLE placeholders (
    placeholder_id SERIAL PRIMARY KEY,
    provider_id INT REFERENCES providers(provider_id) NOT NULL,
    location VARCHAR(255) NOT NULL,
    images VARCHAR(255)[],
    description TEXT
);

-- Services table
CREATE TABLE services (
    service_id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT
);

-- Events table
CREATE TABLE events (
    event_id SERIAL PRIMARY KEY,
    provider_id INT REFERENCES providers(provider_id) NOT NULL,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    date_time TIMESTAMP NOT NULL,
    location VARCHAR(255) NOT NULL
);

-- Comments table
CREATE TABLE comments (
    comment_id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(user_id) NOT NULL,
    post_id INT REFERENCES posts(post_id),
    event_id INT REFERENCES events(event_id),
    content TEXT NOT NULL,
    timestamp TIMESTAMP NOT NULL
);

-- Reactions table
CREATE TABLE reactions (
    reaction_id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(user_id) NOT NULL,
    post_id INT REFERENCES posts(post_id),
    event_id INT REFERENCES events(event_id),
    reaction_type VARCHAR(255) NOT NULL
);

-- Followers table
CREATE TABLE followers (
    follower_id INT REFERENCES users(user_id) NOT NULL,
    following_id INT REFERENCES users(user_id) NOT NULL
);

-- Messages table
CREATE TABLE messages (
    message_id SERIAL PRIMARY KEY,
    sender_id INT REFERENCES users(user_id) NOT NULL,
    receiver_id INT REFERENCES users(user_id) NOT NULL,   

    content TEXT NOT NULL,
    timestamp TIMESTAMP NOT NULL
);

-- Posts table
CREATE TABLE posts (
    post_id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(user_id) NOT NULL,
    content TEXT NOT NULL,
    timestamp TIMESTAMP NOT NULL
);

-- Reservations table
CREATE TABLE reservations (
    reservation_id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(user_id) NOT NULL,
    event_id INT REFERENCES events(event_id) NOT NULL,
    timestamp TIMESTAMP NOT NULL
);

-- Event requests table
CREATE TABLE event_requests (
    request_id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(user_id) NOT NULL,
    event_details TEXT NOT NULL
);

-- Event teams table
CREATE TABLE event_teams (
    team_id SERIAL PRIMARY KEY,
    event_id INT REFERENCES events(event_id) NOT NULL,
    provider_id INT REFERENCES providers(provider_id) NOT NULL
);

