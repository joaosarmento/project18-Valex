import { Router } from "express";
import { getCardBalance, postPayment, rechargeCard } from "../controllers/balanceController.js";
import { checkApiKey } from "../middlewares/cardMiddlewares.js";
import { validateSchema } from "../middlewares/validateSchema.js";
import { logInSchema, paymentSchema, rechargeSchema } from "../schemas/schemas.js";

const balanceRouter = Router();
balanceRouter.get("/checkBalance", validateSchema(logInSchema), getCardBalance);
balanceRouter.post("/recharge", validateSchema(rechargeSchema), checkApiKey, rechargeCard);
balanceRouter.post("/pay", validateSchema(paymentSchema), postPayment)

export default balanceRouter;