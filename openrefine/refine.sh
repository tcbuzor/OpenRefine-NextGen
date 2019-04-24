#!/usr/bin/env bash

./mvnw clean install

cd openrefine-server

./mvnw spring-boot:run
