package model

type Topic3 struct {
	ID      int    `gorm:"primary_key" json:"id"`
	Content string `gorm:"content" json:"content"`
	Details string `gorm:"details" json:"details"`
}
