# Логування контейнерів
## Task-1
### Postgres:
```bash
-> podman logs task-1_db_1        
The files belonging to this database system will be owned by user "postgres".
This user must also own the server process.

The database cluster will be initialized with locale "en_US.utf8".
The default database encoding has accordingly been set to "UTF8".
The default text search configuration will be set to "english".

Data page checksums are disabled.

fixing permissions on existing directory /var/lib/postgresql/data ... ok
creating subdirectories ... ok
selecting dynamic shared memory implementation ... posix
selecting default max_connections ... 100
selecting default shared_buffers ... 128MB
selecting default time zone ... Etc/UTC
creating configuration files ... ok
running bootstrap script ... ok
performing post-bootstrap initialization ... ok
syncing data to disk ... ok


Success. You can now start the database server using:

    pg_ctl -D /var/lib/postgresql/data -l logfile start

initdb: warning: enabling "trust" authentication for local connections
initdb: hint: You can change this by editing pg_hba.conf or using the option -A, or --auth-local and --auth-host, the next time you run initdb.
waiting for server to start....2026-09-23 14:01:03.497 UTC [45] LOG:  starting PostgreSQL 16.11 (Debian 16.11-1.pgdg13+1) on x86_64-pc-linux-gnu, compiled by gcc (Debian 14.2.0-19) 14.2.0, 64-bit
2026-09-23 14:01:03.500 UTC [45] LOG:  listening on Unix socket "/var/run/postgresql/.s.PGSQL.5432"
2026-09-23 14:01:03.508 UTC [48] LOG:  database system was shut down at 2026-09-23 14:01:03 UTC
2026-09-23 14:01:03.515 UTC [45] LOG:  database system is ready to accept connections
 done
server started
CREATE DATABASE


/usr/local/bin/docker-entrypoint.sh: running /docker-entrypoint-initdb.d/init.sql
CREATE TABLE
INSERT 0 3


waiting for server to shut down....2026-09-23 14:01:03.801 UTC [45] LOG:  received fast shutdown request
2026-09-23 14:01:03.803 UTC [45] LOG:  aborting any active transactions
2026-09-23 14:01:03.805 UTC [45] LOG:  background worker "logical replication launcher" (PID 51) exited with exit code 1
2026-09-23 14:01:03.806 UTC [46] LOG:  shutting down
2026-09-23 14:01:03.809 UTC [46] LOG:  checkpoint starting: shutdown immediate
2026-09-23 14:01:03.869 UTC [46] LOG:  checkpoint complete: wrote 935 buffers (5.7%); 0 WAL file(s) added, 0 removed, 0 recycled; write=0.038 s, sync=0.017 s, total=0.064 s; sync files=304, longest=0.005 s, average=0.001 s; distance=4287 kB, estimate=4287 kB; lsn=0/19229E0, redo lsn=0/19229E0
2026-09-23 14:01:03.883 UTC [45] LOG:  database system is shut down
 done
server stopped

PostgreSQL init process complete; ready for start up.

2026-09-23 14:01:03.966 UTC [1] LOG:  starting PostgreSQL 16.11 (Debian 16.11-1.pgdg13+1) on x86_64-pc-linux-gnu, compiled by gcc (Debian 14.2.0-19) 14.2.0, 64-bit
2026-09-23 14:01:03.967 UTC [1] LOG:  listening on IPv4 address "0.0.0.0", port 5432
2026-09-23 14:01:03.967 UTC [1] LOG:  listening on IPv6 address "::", port 5432
2026-09-23 14:01:03.972 UTC [1] LOG:  listening on Unix socket "/var/run/postgresql/.s.PGSQL.5432"
2026-09-23 14:01:03.980 UTC [63] LOG:  database system was shut down at 2026-09-23 14:01:03 UTC
2026-09-23 14:01:03.988 UTC [1] LOG:  database system is ready to accept connections
```
### Backend:
```bash
-> podman logs task-1_web_1
Server is running on port 3000
```
## Task-2
### API Gateway:
```bash
-> podman logs task-2_gateway_1
/docker-entrypoint.sh: /docker-entrypoint.d/ is not empty, will attempt to perform configuration
/docker-entrypoint.sh: Looking for shell scripts in /docker-entrypoint.d/
/docker-entrypoint.sh: Launching /docker-entrypoint.d/10-listen-on-ipv6-by-default.sh
10-listen-on-ipv6-by-default.sh: info: Getting the checksum of /etc/nginx/conf.d/default.conf
10-listen-on-ipv6-by-default.sh: info: Enabled listen on IPv6 in /etc/nginx/conf.d/default.conf
/docker-entrypoint.sh: Sourcing /docker-entrypoint.d/15-local-resolvers.envsh
/docker-entrypoint.sh: Launching /docker-entrypoint.d/20-envsubst-on-templates.sh
/docker-entrypoint.sh: Launching /docker-entrypoint.d/30-tune-worker-processes.sh
/docker-entrypoint.sh: Configuration complete; ready for start up
/docker-entrypoint.sh: /docker-entrypoint.d/ is not empty, will attempt to perform configuration
/docker-entrypoint.sh: Looking for shell scripts in /docker-entrypoint.d/
/docker-entrypoint.sh: Launching /docker-entrypoint.d/10-listen-on-ipv6-by-default.sh
10-listen-on-ipv6-by-default.sh: info: IPv6 listen already enabled
/docker-entrypoint.sh: Sourcing /docker-entrypoint.d/15-local-resolvers.envsh
/docker-entrypoint.sh: Launching /docker-entrypoint.d/20-envsubst-on-templates.sh
/docker-entrypoint.sh: Launching /docker-entrypoint.d/30-tune-worker-processes.sh
/docker-entrypoint.sh: Configuration complete; ready for start up
```
### Service A:
```bash
-> podman logs task-2_service-a_1
 * Serving Flask app 'app'
 * Debug mode: off
WARNING: This is a development server. Do not use it in a production deployment. Use a production WSGI server instead.
 * Running on all addresses (0.0.0.0)
 * Running on http://127.0.0.1:5000
 * Running on http://10.89.2.2:5000
Press CTRL+C to quit
127.0.0.1 - - [23/Sep/2026 13:39:33] "GET /info HTTP/1.1" 200 -
```
## Task-3
### Postgres:
```bash
-> podman logs task-3_db_1
The files belonging to this database system will be owned by user "postgres".
This user must also own the server process.

The database cluster will be initialized with locale "en_US.utf8".
The default database encoding has accordingly been set to "UTF8".
The default text search configuration will be set to "english".

Data page checksums are disabled.

fixing permissions on existing directory /var/lib/postgresql/data ... ok
creating subdirectories ... ok
selecting dynamic shared memory implementation ... posix
selecting default max_connections ... 100
selecting default shared_buffers ... 128MB
selecting default time zone ... Etc/UTC
creating configuration files ... ok
running bootstrap script ... ok
performing post-bootstrap initialization ... ok
syncing data to disk ... ok


Success. You can now start the database server using:

    pg_ctl -D /var/lib/postgresql/data -l logfile start

initdb: warning: enabling "trust" authentication for local connections
initdb: hint: You can change this by editing pg_hba.conf or using the option -A, or --auth-local and --auth-host, the next time you run initdb.
waiting for server to start....2026-09-23 14:10:22.613 UTC [45] LOG:  starting PostgreSQL 16.11 (Debian 16.11-1.pgdg13+1) on x86_64-pc-linux-gnu, compiled by gcc (Debian 14.2.0-19) 14.2.0, 64-bit
2026-09-23 14:10:22.615 UTC [45] LOG:  listening on Unix socket "/var/run/postgresql/.s.PGSQL.5432"
2026-09-23 14:10:22.624 UTC [48] LOG:  database system was shut down at 2026-09-23 14:10:22 UTC
2026-09-23 14:10:22.631 UTC [45] LOG:  database system is ready to accept connections
 done
server started
CREATE DATABASE


/usr/local/bin/docker-entrypoint.sh: running /docker-entrypoint-initdb.d/init.sql
CREATE TABLE
INSERT 0 3


waiting for server to shut down...2026-09-23 14:10:22.946 UTC [45] LOG:  received fast shutdown request
.2026-09-23 14:10:22.949 UTC [45] LOG:  aborting any active transactions
2026-09-23 14:10:22.951 UTC [45] LOG:  background worker "logical replication launcher" (PID 51) exited with exit code 1
2026-09-23 14:10:22.952 UTC [46] LOG:  shutting down
2026-09-23 14:10:22.955 UTC [46] LOG:  checkpoint starting: shutdown immediate
2026-09-23 14:10:23.015 UTC [46] LOG:  checkpoint complete: wrote 935 buffers (5.7%); 0 WAL file(s) added, 0 removed, 0 recycled; write=0.037 s, sync=0.016 s, total=0.063 s; sync files=304, longest=0.005 s, average=0.001 s; distance=4287 kB, estimate=4287 kB; lsn=0/19229E0, redo lsn=0/19229E0
2026-09-23 14:10:23.025 UTC [45] LOG:  database system is shut down
 done
server stopped

PostgreSQL init process complete; ready for start up.

2026-09-23 14:10:23.120 UTC [1] LOG:  starting PostgreSQL 16.11 (Debian 16.11-1.pgdg13+1) on x86_64-pc-linux-gnu, compiled by gcc (Debian 14.2.0-19) 14.2.0, 64-bit
2026-09-23 14:10:23.121 UTC [1] LOG:  listening on IPv4 address "0.0.0.0", port 5432
2026-09-23 14:10:23.121 UTC [1] LOG:  listening on IPv6 address "::", port 5432
2026-09-23 14:10:23.126 UTC [1] LOG:  listening on Unix socket "/var/run/postgresql/.s.PGSQL.5432"
2026-09-23 14:10:23.136 UTC [63] LOG:  database system was shut down at 2026-09-23 14:10:23 UTC
2026-09-23 14:10:23.143 UTC [1] LOG:  database system is ready to accept connections
```
### Backend:
```bash
-> podman logs task-3_backend_1
Backend is running on port 3000
```
### Frontend:
```bash
-> podman logs task-3_frontend_1
/docker-entrypoint.sh: /docker-entrypoint.d/ is not empty, will attempt to perform configuration
/docker-entrypoint.sh: Looking for shell scripts in /docker-entrypoint.d/
/docker-entrypoint.sh: Launching /docker-entrypoint.d/10-listen-on-ipv6-by-default.sh
10-listen-on-ipv6-by-default.sh: info: Getting the checksum of /etc/nginx/conf.d/default.conf
10-listen-on-ipv6-by-default.sh: info: Enabled listen on IPv6 in /etc/nginx/conf.d/default.conf
/docker-entrypoint.sh: Sourcing /docker-entrypoint.d/15-local-resolvers.envsh
/docker-entrypoint.sh: Launching /docker-entrypoint.d/20-envsubst-on-templates.sh
/docker-entrypoint.sh: Launching /docker-entrypoint.d/30-tune-worker-processes.sh
/docker-entrypoint.sh: Configuration complete; ready for start up
```
