let adjectives = ['funny', 'dumb', 'nosey', 'unlucky', 'happy'];
let nouns = ['lizzard', 'zebra', 'rock', 'sky', 'leaf'];
let verbs = ['running', 'burning', 'dying', 'falling', 'eating'];

function getRandomElement(arr) {
    return arr[(Math.floor(Math.random() * (arr.length)))].toUpperCase();
}

let adjective = getRandomElement(adjectives);
let noun = getRandomElement(nouns);
let verb = getRandomElement(verbs);

let app = document.getElementById('app');
app.innerHTML = `<h1>${adjective} ${noun} ${verb}</h1>`;
