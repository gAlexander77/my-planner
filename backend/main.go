package main

import (
	"github.com/galexander77/my-planner/backend/app"
)

func main() {
	// setup and run app
	err := app.SetupAndRunApp()
	if err != nil {
		panic(err)
	}
}
