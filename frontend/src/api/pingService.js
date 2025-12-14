import http from "./http";

export function pingBackend() {
  return http.get("/api/ping");
}