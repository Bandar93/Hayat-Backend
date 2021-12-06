const express = require("express");
const { requestListFetch, fetchRequest, requestCreate, requestDelete } = require("./request.controllers");
const router = express.Router();
const passport = require("passport");

//Param Middleware
router.param("requestId", async (req, res, next, requestId) => {
    const request = await fetchRequest(requestId, next);
    if (request) {
      req.request = request;
      next();
    } else {
      next({ status: 404, message: "Not Found!" });
    }
  });

  // Routers
router.get("/", requestListFetch);
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  requestCreate
);

router.delete("/:requestId",passport.authenticate("jwt", { session: false }), requestDelete);







module.exports = router;