const database = [
    {
        Username: "Kush",
        Password: "R18"
    },

    {
        Username: "Kartik",
        Password: "K11"
    },

    {
        Username: "Mangalya",
        Password: "M13"
    },

    {
        Username: "Lekhan",
        Password: "L12"
    },

    {
        Username: "Meet",
        Password: "T20"
    },

    {
        Username: "Maulik",
        Password: "G07"
    },

    {
        Username: "Aaryan",
        Password: "A01"
    },

    {
        Username: "Lay",
        Password: "Y25"
    },

    {
        Username: "Shreyas",
        Password: "S19"
    },

    {
        Username: "Nisarg",
        Password: "N14"
    }
];

const userNameElement = document.getElementById('Username')
const passwordElement = document.getElementById('Password')

function check() {
    const username = userNameElement.value;
    const password = passwordElement.value;

    if (database.some(person => (person.Username === username))) {
        if (database.some(person => (person.Password === password))) {
            alert('Username and Password is Valid!');
            window.open("loggedin.html");
        }
    }
    else {
        alert('Invalid Username or Password ');
    }
}