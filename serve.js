var AWS = require("aws-sdk");

AWS.config.update({
  region: "ap-northeast-2",
  endpoint: "http://dynamodb.ap-northeast-2.amazonaws.com",
});

const docClient = new AWS.DynamoDB.DocumentClient();
exports.handler.hello = function (event, context, callback) {
  console.log(event.body);
  const usernamecheckparams = {
    Key: { user_name: JSON.parse(event.body).user_name },
    TableName: "users",
  };
  console.log(usernamecheckparams);

  docClient.get(usernamecheckparams, function (err, data) {
    if (err) {
      console.error(
        "Unable to read item. Error JSON:",
        JSON.stringify(err, null, 2)
      );
    } else if (data) {
      console.log("GetItem succeeded:", JSON.stringify(data, null, 2));
    }
  });
};

// const params = {
//     TableName: "users",
//     Item: {
//         "id":Math.floor(Math.random() * 100000),
//         "user_name": JSON.parse(event.body).user_name,
//         "password": JSON.parse(event.body).password,
//         "created_at":`${new Date().getFullYear()}년 ${new Date().getMonth()}월 ${new Date().getDate()}일 ${new Date().getHours()}시 ${new Date().getMinutes()}분 ${new Date().getSeconds()}초`
//     }
// };
// console.log('params====>',params)
// docClient.put(params, function(err, data) {
//     if(err){
//         callback(err, null);
//     } else{
//         callback(null, data);
//     }
// })
