function greetUser(name:string, title?:string):void {
    if (title) {
        console.log("Hello " + title + " " + name);
    } else {
        console.log("Hello " + name);
    }
}

// Call examples
greetUser("Gowri");          // Output: Hello Gowri
greetUser("Gowri", "Ms.");   // Output: Hello Ms. Gowri
