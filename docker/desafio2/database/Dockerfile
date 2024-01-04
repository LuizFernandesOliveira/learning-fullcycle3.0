FROM mysql:5.7

CMD [ "--innodb-use-native-aio=0" ]

ENV MYSQL_DATABASE=nodedb

ENV MYSQL_ROOT_PASSWORD=root

COPY database.sql /docker-entrypoint-initdb.d/
