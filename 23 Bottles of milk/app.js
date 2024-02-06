function bottle() {
    let song = ""
    for (let i = 99; i >= 0; i--) {
        if (i == 1) song += `\n${i} bottle of milk on the wall, 1 bottle of milk. 
      \nTake on down and pass it around, no more bottles of milk on the wall.\n`
        else if (i == 0) song += `No more bottles of milk on the wall, no more bottles of milk. 
      \nGo to the store and buy some more, 99 bottles of milk on the wall.\n`
        else if (i == 2) song += `\n${i} bottles of milk on the wall, ${i} bottles of milk. 
      \nTake one down and pass it around, ${i - 1} bottle of milk on the wall`
        else song += `\n${i} bottles of milk on the wall, ${i} bottles of milk. 
      \nTake one down and pass it around, ${i - 1} bottles of milk on the wall.`
    }
    return song;
}
bottle()