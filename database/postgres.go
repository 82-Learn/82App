package database

import (
	"fmt"

	"82learn.com/core/model"
	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/postgres"
)

var DB *gorm.DB
var err error

func InitialMigration() {
	DB, err = gorm.Open("postgres", "host=localhost port=5432 user=postgres dbname=go-DB sslmode=disable password=Mick45")
	if err != nil {
		fmt.Println(err.Error())
		panic("Cannot connect to Database")
	}

	DB.AutoMigrate(&model.Post{}, &model.User{}, &model.Topic3{})

	fmt.Println("Connected to DB")

}
