package main

import (
	"github.com/gofiber/fiber/v2"
)

func main() {
	app := fiber.New()

	message := "Fiber Server is running!"

	app.Get("/", func(c *fiber.Ctx) error {
		return c.SendString(message)
	})

	app.Listen(":3000")
}
