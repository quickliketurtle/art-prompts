let adjectives = ['funny', 'dumb', 'nosey', 'unlucky', 'happy'];
let nouns = ['lizzard', 'zebra', 'rock', 'sky', 'leaf'];
let verbs = ['running', 'burning', 'dying', 'falling', 'eating'];
let adjective;
let noun;
let verb ;

let result = document.querySelector('#result');
let generate = document.querySelector('#generate');

generate.addEventListener('click', (e) => {
    e.preventDefault();
    generateIdea();
});

function getRandomElement(arr) {
    return arr[(Math.floor(Math.random() * (arr.length)))].toUpperCase();
}

function generateIdea() {
    adjective = getRandomElement(adjectives);
    noun = getRandomElement(nouns);
    verb = getRandomElement(verbs);

    result.innerHTML = `${adjective} ${noun} ${verb}`;
}

document.onload = generateIdea();