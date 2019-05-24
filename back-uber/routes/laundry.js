const express = require("express");
const router = express.Router();

router.get("/dashboard", (req, res, next) => {
  res.json(data);
});

router.post("/launderers", (req, res, next) => {
  const userId = req.session.currentUser._id;
  const laundererInfo = {
    fee: req.body.fee,
    isLaunderer: true
  };

  User.findByIdAndUpdate(
    userId,
    laundererInfo,
    { new: true },
    (err, theUser) => {
      if (err) {
        next(err);
        return;
      }

      req.session.currentUser = theUser;

      res.json(data);
    }
  );
});

module.exports = router;
