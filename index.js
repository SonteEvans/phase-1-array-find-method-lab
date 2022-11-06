// code your solution here
superbowlWin = (victory) => {
    const result = victory.find( victory => victory.result === "W" )
    return !!result ? result.year : undefined;
}
