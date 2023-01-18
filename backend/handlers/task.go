package handlers

import (
	"github.com/galexander77/my-planner/backend/db"
	"github.com/galexander77/my-planner/backend/models"
	"github.com/gofiber/fiber"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo/options"
)

// Create Task
// Receives Task, Note, Date, Time, UserID
// Creates DB TASK entry with taskID, Task, Note, Date, Time, UserID, isCompleted
// returns status
func CreateTask(c *fiber.Ctx) error {
	// get the todo from the request body
	nTask := new(models.CreateTask)

	// validate the request body
	if err := c.BodyParser(nTask); err != nil {
		return c.Status(400).JSON(fiber.Map{"bad input": err.Error()})
	}

	// insert the todo into the database
	coll := db.GetCollection("task")
	res, err := coll.InsertOne(c.Context(), nTask)
	if err != nil {
		return c.Status(500).JSON(fiber.Map{"internal server error": err.Error()})
	}

	// return the inserted todo
	return c.Status(200).JSON(fiber.Map{"inserted_id": res.InsertedID})
}

// Update Task
// Receives taskID, isCompleted
// Updates isCompleted in existing DB TASK entry
// Returns status
func UpdateTask(c *fiber.Ctx) error {
	// get the id from the request params
	id := c.Params("id")
	dbId, err := primitive.ObjectIDFromHex(id)
	if err != nil {
		return c.Status(400).JSON(fiber.Map{"invalid id": err.Error()})
	}

	// get the todo from the request body
	uTodo := new(models.Task)

	// validate the request body
	if err := c.BodyParser(uTodo); err != nil {
		return c.Status(400).JSON(fiber.Map{"bad input": err.Error()})
	}

	// update the todo in the database
	coll := db.GetCollection("task")
	filter := bson.M{"_id": dbId}
	update := bson.M{"$set": uTodo}
	res, err := coll.UpdateOne(c.Context(), filter, update)
	if err != nil {
		return c.Status(500).JSON(fiber.Map{"internal server error": err.Error()})
	}

	// return the updated todo
	return c.Status(200).JSON(fiber.Map{"updated_count": res.ModifiedCount})
}

// Delete Task
// Receives taskID
// deletes DB TASK entry
// Returns status
func DeleteTask(c *fiber.Ctx) error {
	// get the id from the request params
	id := c.Params("id")
	dbId, err := primitive.ObjectIDFromHex(id)
	if err != nil {
		return c.Status(400).JSON(fiber.Map{"invalid id": err.Error()})
	}

	// delete the todo from the database
	coll := db.GetCollection("todos")
	filter := bson.M{"_id": dbId}
	res, err := coll.DeleteOne(c.Context(), filter)
	if err != nil {
		return c.Status(500).JSON(fiber.Map{"internal server error": err.Error()})
	}

	// return the deleted todo
	return c.Status(200).JSON(fiber.Map{"deleted_count": res.DeletedCount})
}

// Get Tasks
// receives userID
// Returns list of tasks that have that userID
func AllTask(c *fiber.Ctx) error {
	// fetch all todos
	coll := db.GetCollection("task")

	// return all todos
	filter := bson.M{}
	opts := options.Find().SetSkip(0).SetLimit(100)

	// find all todos
	cursor, err := coll.Find(c.Context(), filter, opts)
	if err != nil {
		return c.Status(500).JSON(fiber.Map{"internal server error": err.Error()})
	}

	// convert cursor to slice
	todos := make([]models.Task, 0)
	if err = cursor.All(c.Context(), &todos); err != nil {
		return c.Status(500).JSON(fiber.Map{"internal server error": err.Error()})
	}

	// return todos
	return c.Status(200).JSON(todos)
}
