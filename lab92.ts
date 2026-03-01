function formatValue(value: string | number): void {
    if (typeof value === "string") {
        console.log(value.toUpperCase());
    } else if (typeof value === "number") {
        console.log(Math.round(value));
    }
}
formatValue("hello"); 
formatValue(4.7);  
