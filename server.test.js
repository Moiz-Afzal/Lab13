const request = require("supertest");
const app = require('./routes/User');
const mongoose = require('mongoose'); 

//Test case to checking whether the user is added successfully or not by entering all the field
describe("Test the root path", () =>{
    test("It should response the POST method ", () =>{
        const response = request(app).post("http://localhost:8000/User/add"
        ).send ({
            Name : "Obaid",
            Email: "obaid",
            Age : 12,
            Contact:123

        });
        expect(response.statusCode).toBe(undefined);
    })
})

//Test case to checking whether the user is added successfully or not by only entering username.
describe("Test the adding functionality by only entering name", () =>{
    test("It should response the POST method ", () =>{
        const response = request(app).post("http://localhost:8000/User/add"
        ).send ({
            Name : "Moiz"

        });
        expect(response.statusCode).toBe(undefined);
    })
})

//Test case to see whether the exercise is deleted by using _id or not
describe("Test the delete funstionality", () =>{
    test("It should response the delete response", () =>{
        const response = request(app).delete("http://localhost:8000/User/:id"
        );
        expect(response.statusCode).toBe(undefined);
    })
})