const express = require("express");
const cors = require("cors");
const connectDB = require("./db/database/database")
const morgan = require("morgan");
const logger = require("./middleware/logger")
const errorHandler = require("./middleware/errorHandler");
const userRoutes = require("./apis/user/users.routes");
const passport = require("passport");
const { localStrategy, jwtStrategy } = require("./middleware/passport");




// express and DB
const app = express();
connectDB();


//passport
app.use(passport.initialize());
passport.use(localStrategy);
passport.use(jwtStrategy);

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(logger);

// Routes
app.use("/api", userRoutes);


// Errors
app.use((req, res, next) => {
    res.status(404).json({ message: "Path not found" });
  });
  app.use(errorHandler);


// Port
const PORT = 8000;
app.listen(PORT,() => console.log(`it's working ${PORT}`))