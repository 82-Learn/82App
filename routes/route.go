package routes

import (
	"82learn.com/core/middleware"
	"github.com/gofiber/fiber/v2"
)

func Routers(app *fiber.App) {
	app.Get("/", middleware.Hello)
	app.Get("/posts", middleware.GetPosts)
	app.Get("/users", middleware.GetUsers)
	app.Get("/topic3", middleware.GetTopic3)
}
