// let crypto = require("crypto");
// let cipher = crypto.getCiphers();
// //console.log("cipher", cipher);

// const text = "유병국";
// const key = "abcdeg";

// let hash = crypto.createHmac("sha512", key).update(text).digest("base64");
// console.log("hash", hash);
// const crypto = require("crypto");

// const algorithm = "aes-192-cbc";
// const password = "유병국";

// First, we'll generate the key. The key length is dependent on the algorithm.
// In this case for aes192, it is 24 bytes (192 bits).
// crypto.scrypt(password, "salt", 24, (err, key) => {
//   if (err) throw err;
//   // Then, we'll generate a random initialization vector
//   crypto.randomFill(new Uint8Array(16), (err, iv) => {
//     if (err) throw err;

//     // Once we have the key and iv, we can create and use the cipher...
//     const cipher = crypto.createCipheriv(algorithm, key, iv);

//     let encrypted = "";
//     cipher.setEncoding("hex");

//     cipher.on("data", (chunk) => (encrypted += chunk));
//     cipher.on("end", () => console.log(encrypted));

//     cipher.write("some clear text data");
//     cipher.end();
//   });
// });

// console.log(crypto.getHashes());
// console.log(crypto.getCiphers());
// crypto.randomBytes(16, (err, buf) => {
//   console.log(buf.toString("hex"));
// });

const crypto = require("crypto");

// function hashPassword(password) {
//   let salt = "localhost";
//   let shasum = crypto.createHash("sha256");
//   shasum.update(password + salt);
//   let result = shasum.digest("hex");
//   console.log("🚀 ~ file: Dynamo.js ~ line 16 ~ hashPassword ~ result", result);
//   return result;
// }
function hashPassword(password) {
  return crypto
    .createHash("sha256")
    .update(password + "localhost")
    .digest("hex");
}
//hashPassword("12341234");
console.log(
  "🚀 ~ file: crypto.js ~ line 60 ~ hashPassword",
  hashPassword("1234")
);
