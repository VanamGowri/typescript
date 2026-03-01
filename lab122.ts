function printInputValue(): void {
    let element = document.getElementById("username") as HTMLInputElement;
    let value: unknown = element.value;
    let username = value as string;
    console.log(username);
}
