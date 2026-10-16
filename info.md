### Open the Redis CLI:

docker compose exec redis redis-cli

After running the command you should see a prompt similar to:

127.0.0.1:6379>


### SET and GET command

Redis uses SET to save a value and GET to read it.

SET user:1 Alice
GET user:1

### Check whether a key exists

EXISTS user:1

Result 1 means the key exists. 0 means it doesn't.

### Check what type of data exists on the key

TYPE user:1

Will return string, integer

### Delete data

DEL user:1

after deleting checking if data contains 
GET user:1

### List keys

KEYS *

### Lists

LPUSH tasks "send-email"
LPUSH tasks "create-report"
LRANGE tasks 0 -1

LRANGE tasks 0 -1 returns all items in the list.

### Hashes

HSET user:10 name Alice age 30
HGET user:10 name
HGETALL user:10

### Sets

SADD user:10:roles admin editor
SMEMBERS user:10:roles
SISMEMBER user:10:roles admin


### How do you query Redis?

SELECT name FROM users WHERE id = 10;

HGET user:10 name

