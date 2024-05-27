FROM mongo:4.4.6

RUN mkdir -p /docker-db.d

COPY data.json /docker-db.d/data.json
COPY initdb.sh /docker-db.d/initdb.sh

RUN chmod +x /docker-db.d/initdb.sh

CMD ["bash", "-c", "/docker-db.d/initdb.sh && mongod --bind_ip_all"]
