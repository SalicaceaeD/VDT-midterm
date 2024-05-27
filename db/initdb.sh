#!/bin/bash
mongod --fork --logpath /var/log/mongodb/mongod.log --dbpath /data/db --bind_ip_all

sleep 5

DATA_EXISTS=$(mongo crudoperation --eval "user.count()" --quiet)

if [ "$DATA_EXISTS" -eq 0 ]; then
  echo "Importing data..."
  mongoimport --db crudoperation --collection user --file /docker-initdb.d/data.json --jsonArray
else
  echo "Cancel importing."
fi

mongod --shutdown
