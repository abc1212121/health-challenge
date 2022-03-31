var model = {
  is_success: true,
  user_id: "sourabh_13022002",
  email: "sourabh0025.cse19@chitkara.edu.in",
  roll_number: "1910990025",
};

module.exports = function (app) {
  let users = [];
  app.post("/automation-campus/create/user", (req, res) => {
    var data = req.body.data;
    users.forEach((i) => {
      if (i.phoneNumber == data.phoneNumber) {
        res.send("phone number already exists");
      } else if (
        user.firstName == data.firstName &&
        user.lastName == data.lastName
      ) {
        res.send("user already exists");
      } else {
        res.send("user added");
      }
    });
  });
};
