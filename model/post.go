package model

type Post struct {
	ID    int    `gorm:"primary_key" json:"id"`
	Title string `gorm:"title" json:"title"`
	Body  string `gorm:"body" json:"body"`
}
