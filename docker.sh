#!/bin/bash

sudo docker pull mongo

sudo docker run --name mongodb -p27019:27017 -d mongo

sudo docker ps > log_mongo.txt