---
sidebar_position: 2
title: "🚀 Get Start"
---

# ✨ Quick Start
😍 Deploying XPack is incredibly simple. With just one command line, you can deploy your MCP Market in 10 minutes.

```bash
curl -sSO http://xpack.ai/install/quick-start.sh; bash quick-start.sh
```

## 🖥️ System Requirements

### ✅ Recommended Hardware
- **CPU**: 8 cores  
- **Memory**: 16 GB  
- **Storage**: 200 GB  
- **Operating System**: Linux  
- **Architecture**: AMD64  

### ✅ Minimum Requirements
- **CPU**: 2 cores  
- **Memory**: 4 GB  
- **Storage**: 200 GB  
- **Operating System**: Linux / macOS  
- **Architecture**: AMD64 / ARM64  

  



## 📦 Runtime Dependencies

**XPack-MCP-Market** requires the following services (self-hosted or containerized):

| Component   | Minimum Version |
|-------------|-----------------|
| **MySQL**   | ≥ 5.7.x         |
| **Redis**   | ≥ 6.2.x         |
| **RabbitMQ**| ≥ 4.0           |

Ensure these services are available and properly configured before running the backend.


  


## 💿 Deployment

😍 Deploying XPack is incredibly simple. With just one command line, you can deploy your MCP Market in 10 minutes.

```bash
curl -sSO http://xpack.ai/install/quick-start.sh; bash quick-start.sh
```

<details>
  <summary><h4>🔖Docker-Compose Deployment</h4></summary>

  To install XPack-MCP-Market using this method, you need to have [Docker](https://docs.docker.com/engine/install/) and [Docker Compose](https://docs.docker.com/compose/install/standalone/) installed.

  1. Edit the `docker-compose.yml` file
  ```
  vi docker-compose.yml
  ```
    


  2. Modify the configuration, you can reference the original file at [docker-compose.yml](https://github.com/xpack-ai/XPack-MCP-Market/blob/main/scripts/docker-compose.yml)
  ```
  version: '3'
  services:
    xpack-mysql:
      image: mysql:8.0.37
      privileged: true
      restart: always
      container_name: xpack-mysql
      hostname: xpack-mysql
      command:
        - "--character-set-server=utf8mb4"
        - "--collation-server=utf8mb4_unicode_ci"
      ports:
        - "33306:3306"
      environment:
        - MYSQL_ROOT_PASSWORD=mysql_ZTdhRB
        - MYSQL_DATABASE=xpack
      volumes:
        - /var/lib/xpack/mysql:/var/lib/mysql
      networks:
        - xpack
    xpack-mcp-market:
      image: xpackai/xpack-mcp-market
      container_name: xpack-mcp-market
      privileged: true
      restart: always
      networks:
        - xpack
      ports:
        - "3000:3000"
        - "8002:8002"
      depends_on:
        - xpack-mysql
        - xpack-redis
        - xpack-rabbitmq
    xpack-redis:
      container_name: xpack-redis
      image: redis:7.2.4
      hostname: xpack-redis
      privileged: true
      restart: always
      ports:
        - 6379:6379
      command:
        - bash
        - -c
        - "redis-server --protected-mode yes --logfile redis.log --appendonly no --port 6379 --requirepass redis_6sJZDm"
      networks:
        - xpack
    xpack-rabbitmq:
      image: rabbitmq:4.1.2-alpine
      container_name: xpack-rabbitmq
      privileged: true
      restart: always
      environment:
        - RABBITMQ_DEFAULT_USER=rabbitmq
        - RABBITMQ_DEFAULT_PASS=rabbitmq_Gs123dA
      networks:
        - xpack
  networks:
    xpack:
      driver: bridge
      ipam:
        driver: default
        config:
          - subnet: 172.101.0.0/24
  ```

    


  3. Start XPack-MCP-Market

  ```
  docker-compose up -d
  ``` 

    


  4. Access `XPack-MCP-Market` in your browser at port 3000

  * **Admin User Login Address**: http://\{IP\}:3000/admin-signin
  * **Admin User**: admin
  * **Admin Password**: 123456789
</details>


<details>
  <summary><h4>🔖Build</h4></summary>
  
  1. Clone the XPack repository.
  ```
  git clone https://github.com/xpack-ai/XPack-MCP-Market.git
  ```
  2. Enter the project directory.
  ```
  cd XPack-MCP-Market
  ```
  ### Frontend Build
  > Requirements:
  > - Node >= 22.x
  > - Pnpm >= 10.x
  
  1. Execute the frontend build script
  ```
  cd scripts && ./frontend_build.sh && cd ../
  ```
  After compilation, the frontend code will be built into the `frontend/out` directory.
  
  2. Start the UI interface
  ```
  cd frontend/out && node server.js
  ```
  ### Backend Build
  > Requirements:
  > - Python >= 3.11
  
  #### Using`uv` (Recommended)
  1. Create virtual environment
  ```
  uv venv
  ```
  2. Activate virtual environment
  ```
  source .venv/bin/activate
  ```
  3. Install dependencies
  ```
  uv pip install -r requirements.txt
  ```
  4. Copy environment variable file
  ```
  cp .env.example .env
  ```
  5. Edit environment variables
  ```
  vi .env
  ```
  6. Start admin backend service
  **Foreground**
  ```
  uvicorn services.admin_service.main:app --host 0.0.0.0 --port 8001 --reload
  ```
  **Background**
  ```
  uvicorn services.admin_service.main:app --host 0.0.0.0 --port 8001 --reload &
  ```
  
  7. Start API to MCP service
  **Foreground**
  ```
  uvicorn services.api_service.main:app --host 0.0.0.0 --port 8002 --reload
  ``` 
  **Background**
  ```
  uvicorn services.api_service.main:app --host 0.0.0.0 --port 8002 --reload &
  ```
  ### Docker Build
  ```
  docker build -t xpack-mcp-market --build-arg APP=xpack-mcp-market --build-arg VERSION=1.0.0 -f ./scripts/Dockerfile ./
  ```
</details>