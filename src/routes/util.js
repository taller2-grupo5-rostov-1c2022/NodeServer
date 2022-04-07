import { Router } from "express";
const router = Router();

router.get("/health", async (req, res) => {
  res.send("ok");
});

router.get("/version", async (req, res) => {
  res.send(process.env.npm_package_version);
});

export default router;
