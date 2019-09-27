#!/bin/sh
cd ./node
docker build -t kylerdaybell/project_sahara .
docker run -p 8080:80 kylerdaybell/project_sahara