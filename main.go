package main

import (
	"82learn.com/core/database"
	"82learn.com/core/routes"
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/gofiber/template/html"
)

func main() {
	// Database Connection
	database.InitialMigration()

	// Connect HTML
	engine := html.New("./views", ".html")

	//HTML Settings
	app := fiber.New(fiber.Config{
		Views: engine,
	})

	// For dev only - Set up CORS as React client can consume our API
	app.Use(cors.New(cors.Config{
		AllowOrigins: "*",
		AllowMethods: "GET,POST,PATCH",
	}))

	//API Routes
	routes.Routers(app)

	//App Port
	app.Listen(":3000")

}
