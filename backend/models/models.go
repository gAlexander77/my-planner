package models

import "go.mongodb.org/mongo-driver/bson/primitive"

// Task Model
type Task struct {
	Task        string `json:"task" bson:"task"`
	Note        string `json:"note" bson:"note"`
	Date        string `json:"date" bson:"date"`
	IsCompleted bool   `json:"isCompleted" bson:"isCompleted"`
}

type CreateTask struct {
	Id          primitive.ObjectID `json:"id" bson:"_id"`
	Task        string             `json:"task" bson:"task"`
	Note        string             `json:"note" bson:"note"`
	Date        string             `json:"date" bson:"date"`
	IsCompleted bool               `json:"isCompleted" bson:"isCompleted"`
}
