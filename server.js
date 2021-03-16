const express = require("express");
const routes = require("./routes");

const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

if (process.env.NODE_ENV === "production") {
    app.use(express.static("restaurant/build"));
}

app.use(routes);

app.listen(PORT, function () {
    console.log(
        "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
        PORT,
        PORT
    );
});