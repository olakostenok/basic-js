module.exports = function calculateHanoi( disksNumber, turnsSpeed ) {
    
    var turns = Math.pow(2, disksNumber);
    var seconds = turns / (turnsSpeed/3600);

    return {turns: turns, seconds: seconds};
}