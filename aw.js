const jwt = require("jsonwebtoken");

function as() {
  let decodedJwt = jwt.verify(
    "eyJ1c2VySWQiOiIwNzk0ZjIxNC1iY2FhLTQxNDctYmI1OC01NmNmZTQ5YTA3YWEiLCJpYXQiOjE2MDc0MDExNDV9",
    process.env.JWT_SECRET
  );
  console.log(
    "🚀 ~ file: validate.js ~ line 16 ~ exports.handler= ~ decodedJwt",
    decodedJwt
  );
}
as();
