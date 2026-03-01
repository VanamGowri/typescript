function greetUser(name: string, title: string = "Mr./Ms."): void {
    if (title) {
        console.log("Hello, " + title + " " + name + "!");
    } else {
        console.log("Hello, " + name + "!");
    }
}

// Function Calls
greetUser("Gowri");           
greetUser("Gowri", "Dr.");
