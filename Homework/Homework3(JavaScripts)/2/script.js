function runCode() {
    const output = [];

    let score = Math.floor(Math.random() * 101);
    let grade = "";
    let text = "";

    output.push("คะแนนที่สุ่มได้:" + score);
    console.log("คะแนนที่สุ่มได้:", score);
    //ตรวจสอบเกรด
    if (score >= 80) {
        grade = "A";
        output.push("เกรด: A");
        console.log("เกรด: A");
    } else if (score >= 70) {
        grade = "B";
        output.push("เกรด: B");
        console.log("เกรด: B");
    } else if (score >= 60) {
        grade = "C";
        output.push("เกรด: C");
        console.log("เกรด: C");
    } else if (score >= 50) {
        grade = "D";
        output.push("เกรด: D");
        console.log("เกรด: D");
    } else {
        grade = "F";
        output.push("เกรด: F");
        console.log("เกรด: F")
    }

    //ตรวจสอบว่า ผ่านหรือไม่ผ่าน
    if (score >= 50) {
        output.push("ผลสอบ: ผ่าน");
        console.log("ผลสอบ: ผ่าน");
    } else {
        output.push("ผลสอบ: ไม่ผ่าน");
        console.log("ผลสอบ: ไม่ผ่าน");
    }

    //คำอธิบาย
    switch (grade) {
        case "A":
            text = "ยอดเยื่ยมมาก";
            break;
        case "B":
            text = "ดีมาก รักษามาตรฐานไว้";
            break;
        case "C":
            text = "ผ่านเกณท์ระดับดี";
            break;
        case "D":
            text = "พอใช้ แต่ควรพัฒนาเพิ่ม";
            break;
        case "F":
            text = "ต้องลงทะเบียนเรียนใหม่";
            break
        default:
            text = "ไม่มีเกรด";
    }

    document.getElementById("outputBox").textContent = output.join("\n");
    document.getElementById("outputBox").textContent += "\nคำอธิบาย:" + text;
}