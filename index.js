let age = confirm('Are you already 18 years old?');

if (age) {
    const secondQuestion = +prompt('What time do you get up?');
    if (isNaN(secondQuestion)) {
        alert('Incorect input');
    } else if (secondQuestion > 0 && secondQuestion <= 5) {
        alert('Very early.');
    } else if (secondQuestion > 5 && secondQuestion <= 8) {
        alert('It is still early.');
    } else if (secondQuestion > 8 && secondQuestion <= 11) {
        alert('Normally.');
    } else if (secondQuestion > 11 && secondQuestion <= 14) {
        alert('Too late.');
    } else if (secondQuestion > 14 && secondQuestion <= 24) {
        alert('Very very late.');
    } else {
        alert('Learn to use the clock.');
    }
} else {
    alert('You are not allowed to take the survey.');
}

