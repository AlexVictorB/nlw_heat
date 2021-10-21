import { request, response, Router } from "express";
import { AuthenticateUserController } from "./controllers/AuthenticadeUserController";
import { CreateMessageController } from "./controllers/CreateMessageController";
import { GetLast3MessagesController } from "./controllers/GetLast3MessageController";
import { ProfileUserController } from "./controllers/ProfileUserController";
import { ensureAuthenticate } from "./middleware/ensureAuthenticate";

const router = Router();

router.post("/authenticate", new AuthenticateUserController().handle);
router.post("/messages", ensureAuthenticate, new CreateMessageController().handle)

router.get("/messages/last3", new GetLast3MessagesController().handle)
router.get("/profile", ensureAuthenticate ,new ProfileUserController().handle)

export { router }