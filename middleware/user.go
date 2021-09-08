package middleware

import (
	"82learn.com/core/database"
	"82learn.com/core/model"
	"github.com/gofiber/fiber/v2"
)

func Hello(c *fiber.Ctx) error {
	return c.Render("index", fiber.Map{
		"Title": " Many Worlds!",
	})
}

//func GetUsers(c *fiber.Ctx) error {
//	var posts []model.Post
//	database.DB.Find(&posts)
//	return c.JSON(fiber.Map{"Post": &posts})
//}

var err error

func GetPosts(c *fiber.Ctx) error {
	var posts []model.Post
	database.DB.Find(&posts)
	if err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error": true,
			"msg":   err.Error(),
		})
	}

	return c.JSON(fiber.Map{
		"Post": &posts,
		"msg":  nil,
	})
}

func GetUsers(c *fiber.Ctx) error {
	var users []model.User
	database.DB.Find(&users)
	return c.JSON(fiber.Map{"User": &users})
}

func GetTopic3(c *fiber.Ctx) error {
	var topic3 []model.Topic3
	database.DB.Find(&topic3)
	return c.JSON(fiber.Map{"Topic3": &topic3})
}
