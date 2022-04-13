import { Router } from "express";

const router = Router();

/**
 * @swagger
 * /api/service/:
 *  get:
 *    description: Use to request all services
 *    parameters:
 *      - in: query
 *        name: message
 *        description: The message to send.
 *        type: string
 *    responses:
 *      200:
 *        description: Success
 *      500:
 *        description: Server Error
 *    security:
 *      - ApiKeyAuth: []
 */
router.get("/", async (req, res) => {
  const message = req.query.message;

  res.json({
    data: {
      message,
    },
  });
});

export default router;
