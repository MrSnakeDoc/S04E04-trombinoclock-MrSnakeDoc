import express from "express"
import ejs from "ejs"
import { config } from "./config"
import client from "./database"
import session from "express-session"
import { router } from "./router"
const app = express()

try {
	client.connect()
	console.log("Connected to Postgres!")
} catch (error) {
	console.log(`Something went wrong ${error}`)
}

app.use(express.urlencoded({ extended: true }))

app.use(
	session({
		secret: "abdulTheCat",
		resave: true,
		saveUninitialized: true,
		cookie: {},
	})
)

app.use(router)

app.set("views", "./src/views")

app.set("view engine", "ejs")

app.listen(config.port, async () => {
	console.log(`Server is running on http://${config.host}:${config.port}`)
})
