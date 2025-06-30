#!/bin/bash
set -e

CONTAINER_NAME=$1
IMAGE_NAME=$2
PORT=$3

echo "➡️ Building Docker image..."
docker build -t $IMAGE_NAME .

echo "🛑 Stopping old container (if exists)..."
docker stop $CONTAINER_NAME 2>/dev/null || true
docker rm $CONTAINER_NAME 2>/dev/null || true

echo "🚀 Running new container..."
docker run -d --name $CONTAINER_NAME -p $PORT:3000 $IMAGE_NAME

echo "✅ App is now running at http://localhost:$PORT"
docker ps --filter "name=$CONTAINER_NAME"
docker logs $CONTAINER_NAME --tail 10
