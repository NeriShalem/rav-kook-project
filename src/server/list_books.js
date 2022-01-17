const secretKey = require("./secret").MODEL_KEY;
const mongoose = require("mongoose");

// async function mongooseConnect() {
//   mongoose.connect(
//     `mongodb+srv://nenes777:${secretKey}@cluster0.2u5ep.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
//   );
// }

mongoose.connect(
  `mongodb+srv://nenes777:${secretKey}@cluster0.2u5ep.mongodb.net/rav-kook-db?retryWrites=true&w=majority`,
   ()=>{console.log("conntect to mongoDB")}
);
const UserSchema = new mongoose.Schema({
  userName: {
    type: String,
    require: true,
  },
});

const User = mongoose.model("User", UserSchema);

const user1 = new User({ userName: "neriel" });

try {
  user1.save().then(() => {
    console.log(user1);
  }).
  then()
} catch (e) {
  console.log(e);
}
