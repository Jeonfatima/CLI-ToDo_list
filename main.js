#! /usr/bin/env node
import inquirer from "inquirer";
let todos = [];
let condition = true;
while (condition) {
    let addTask = await inquirer.prompt([{
            name: "todo",
            type: "input",
            message: "What would you like to add in you Todos"
        },
        {
            name: "todo2",
            type: "choice",
            message: "Do you want to add another item to your to do list",
            default: "false",
            if(todo2 = true) {
                inquirer.prompt({
                    name: "todo2answer",
                    type: "input",
                    message: "What would you like to add?",
                });
            }
        },
        {
            name: "addMore",
            type: "confirm",
            message: "Are you sure you want to add the above mentioned thing in your todos?",
            default: "false",
        },
    ]);
    todos.push(addTask.todo);
    condition = addTask.addMore;
    console.log(todos);
}
