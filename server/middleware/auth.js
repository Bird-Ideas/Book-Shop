const { verify } = require("jsonwebtoken");

const validateToken = async (req, res, next) => {
  const token = req.header("accessToken");

  if (!token) return res.json({ error: "Not logged in." });
  try {
      const valid = verify(token, "bruh");
      if(valid){
          return next(); 
      }
  } catch (err) {
      return res.json({ error: err }); 
  }
};

module.exports = { validateToken };
