package model

type User struct {
	ID        int    `gorm:"primary_key" json:"id"`
	FirstName string `gorm:"first_name" json:"first_name"`
	LastName  string `gorm:"last_name" json:"last_name"`
	Email     string `gorm:"email" json:"email"`
}
