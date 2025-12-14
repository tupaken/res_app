# res_app

Setup and start guide for the Spring Boot backend and Vue 3 + Vite frontend.

## Requirements
- Java 17
- Node.js 20+ and npm
- Docker + Docker Compose (optional)

## Configuration
- Backend runs on http://localhost:8080 by default.
- Frontend expects `VITE_API_BASE_URL` pointing to the backend. Create `frontend/.env.local` with:
  ```
  VITE_API_BASE_URL=http://localhost:8080
  ```

## Run with Docker
```sh
docker-compose up --build
```
- Backend available at http://localhost:8080
- Frontend available at http://localhost:5173

## Run locally without Docker
Backend:
```sh
cd backend
./mvnw spring-boot:run
```

Frontend (after backend is running):
```sh
cd frontend
npm install
VITE_API_BASE_URL=http://localhost:8080 npm run dev
```

For a production bundle, run `npm run build` inside `frontend`.
