function sing() {
    let song = "";
    for (let i = 0; i < 11; i++) {
        if (i === 4) song += "there will be an answer, ";
        else if (i === 10) song += "whisper words of wisdom, let it be";
        else song += "let it be, "
    }
    return song;
}

//Your code above ^^^

console.log(sing());