import { Express } from "express";
import { createSessionHandler, deleteSessionHandler, getSessionHandler } from "./controllers/session.controller";
import { requireUser } from "./middleware/requireUser"

function routes(app: Express) {
  app.get("/", (req, res) => {
    res.send('Hi, Wellcome')
  })

  // login
  app.post("/api/session", createSessionHandler)

  // get the current session
  app.get("/api/session", requireUser, getSessionHandler)

  // logout
  app.delete("/api/session", requireUser, deleteSessionHandler)

}

export default routes
