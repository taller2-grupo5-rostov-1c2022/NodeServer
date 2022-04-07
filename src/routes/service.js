import { Router } from "express";

const router = Router();

/**
 * @swagger
 * /api/service/:
 *  get:
 *    description: Use to request all services
 *    responses:
 *      200:
 *        description: Success
 *      500:
 *        description: Server Error
 */
router.get("/", async (req, res) => {
  res.status(500).json({
    data: {
      message: "Pending Implementation",
    },
  });
});

export default router;
