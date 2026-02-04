const rejectUnauthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.sendStatus(403);
  }
};

// Example of custom middleware: feel free to modify
// const rejectIfNotAdmin = (req, res, next) => {
//   if (req.isAuthenticated() && req.user?.admin) {
//     // Check to see if the user is authenticated AND an admin
//     // (based on the existance of an `admin` column in the database)
//     next();
//   } else {
//     res.sendStatus(403);
//   }
// };


module.exports = { 
  rejectUnauthenticated,
  // rejectIfNotAdmin
};
