import jwt from "jsonwebtoken";

const authenticatejwt = (req, res, next) => {
  const Secret = process.env.Secret;
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(' ')[1];
    jwt.verify(token, Secret, (err, user) => {
      if (err) {
        return res.sendStatus(403);
      }
      req.user = user;
      next();
    });
  }
  else {
    res.sendStatus(401);
  }

};

export {
  authenticatejwt
}
