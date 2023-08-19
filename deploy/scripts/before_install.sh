#!/usr/bin/env bash
# Important need to login aws ecr to be able to pull image
pwd
aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin 295899798296.dkr.ecr.us-east-1.amazonaws.com

cd /home/ubuntu/simplenode2/deploy
docker-compose pull