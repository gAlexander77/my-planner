package models

// User Model
type user struct {
	Id       int    `json:"id"`
	Username string `json:"username"`
	Password string `json:"password"`
}

// Task Model
type task struct {
	Id          int    `json:"id"`
	Task        string `json:"task"`
	Note        string `json:"note"`
	IsCompleted bool   `json:"isCompleted"`
	UserID      int    `json:"user_id"`
}
