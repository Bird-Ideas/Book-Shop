const { verify } = require("jsonwebtoken");

const validateToken = async (req, res, next) => {
  const token = req.header("accessToken");

  if (!token) return res.json({ error: "Not logged in." });
  try {
      const validToken = verify(token, "bruh");
      req.user = validToken.login; 
      if(validToken){
          return next(); 
      }
  } catch (err) {
      return res.json({ error: err }); 
  }
};

module.exports = { validateToken };
