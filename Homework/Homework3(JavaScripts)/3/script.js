function runCode() {
    const output = [];
    let maxNumber = "10";
    text = "";

    //นับเลขคู่คี่
    for (let i = 0; i <= maxNumber; i++) {
        if (i % 2 == 0) {
            text += i + "(" + "คู่" + ")" + "\n";
            console.log(i + "(" + "คู่" + ")")
        } else {
            text += i + "(" + "คี่" + ")" + "\n";
            console.log(i + "(" + "คี่" + ")")
        }
    }

    //นับที่ละสอง
    for (let i = 0; i <= maxNumber; i+=2) {
        text += "นับทีละ 2: " + i + "\n";
        console.log("นับทีละ 2: " + i);
    }

    //นับถอยหลัง
    for (let i = maxNumber; i >= 1; i--) {
        text += "นับถอยหลัง: " + i + "\n";
        console.log("นับถอยหลัง: " + i);
    }

    document.getElementById("outputBox").textContent = text;
}