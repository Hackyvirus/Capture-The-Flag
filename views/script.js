// define all variables

let joker = 0;
let life = 1;
let question = 1;
let level1 = 1;
let level2 = 2;
let level3 = 3;
let level2_question = 1;
let level3_question = 1;
let level = 1;

let userName;
function sub() {
        userName = document.getElementById("userName").value
}

let questionSet = [
        [
                { "id": 0, "question": "Python built-in function for finding the length of a list?", "answer": "len" },
                { "id": 1, "question": "C language syntax for declaring a pointer?", "answer": "*" },
                { "id": 2, "question": "JavaScript method for adding an element to the end of an array?", "answer": "push" },
                { "id": 3, "question": "Java keyword to define a constant variable?", "answer": "final" },
                { "id": 4, "question": "Electronic component that stores electrical charge?", "answer": "Capacitor" },
                { "id": 5, "question": "DBMS language for querying databases?", "answer": "SQL" },
                { "id": 6, "question": "In which year c language was developed?", "answer": "1972" },
                { "id": 7, "question": "Python library for data visualization?", "answer": "Matplotlib" },
                { "id": 8, "question": "C function to open a file?", "answer": "fopen" },
                { "id": 9, "question": "JavaScript object notation abbreviation?", "answer": "JSON" }
        ],
        [
                { "id": 0, "question": "Data structure that follows Last In, First Out (LIFO) principle?", "answer": "Stack" },
                { "id": 1, "question": "Security measure that analyzes and filters network traffic?", "answer": "Firewall" },
                { "id": 2, "question": "Network protocol for secure communication over a computer network?", "answer": "HTTPS" },
                { "id": 3, "question": "Algorithm for sorting elements by repeatedly dividing the array into halves?", "answer": "Merge Sort" },
                { "id": 4, "question": "Malicious software designed to block access to a computer system until a sum of money is paid?", "answer": "Ransomware" },
                { "id": 5, "question": "Programming language commonly used for artificial intelligence and machine learning?", "answer": "Python" },
                { "id": 6, "question": "Web development framework for building single-page applications?", "answer": "React" },
                { "id": 7, "question": "Database model that organizes data into tables with rows and columns?", "answer": "Relational Database" },
                { "id": 8, "question": "Cybersecurity technique to protect against unauthorized access to data?", "answer": "Encryption" },
                { "id": 9, "question": "Concept in object-oriented programming where a class can inherit properties and behaviors from another class?", "answer": "Inheritance" }
        ],
        [
                { "id": 0, "question": "Linux command for searching for a specific pattern in a file?", "answer": "grep" },
                { "id": 1, "question": "Web development language used for styling and layout of web pages?", "answer": "CSS" },
                { "id": 2, "question": "Programming language developed by Microsoft commonly used for Windows application development?", "answer": "C#" },
                { "id": 3, "question": "Database language for managing and manipulating relational databases?", "answer": "SQL" },
                { "id": 4, "question": "Concept in software engineering that involves breaking a problem into smaller, manageable parts?", "answer": "Decomposition" },
                { "id": 5, "question": "Software design pattern for creating objects without specifying the exact class?", "answer": "Factory Pattern" },
                { "id": 6, "question": "JavaScript library for building user interfaces, developed by Facebook?", "answer": "React" },
                { "id": 7, "question": "File format for exchanging structured data between systems?", "answer": "JSON" },
                { "id": 8, "question": "Computer network device that forwards data between networks?", "answer": "Router" },
                { "id": 9, "question": "Web protocol for transferring hypertext requests and information?", "answer": "HTTP" }
        ]
];

let usedQuestions = [];

function getRandomQuestion(level) {
        if (level < 1 || level > questionSet.length) {
                return "Invalid level";
        }

        let questions = questionSet[level - 1];
        let availableQuestions = questions.filter(q => !usedQuestions.includes(q.id));

        if (availableQuestions.length === 0) {
                usedQuestions = [];
                availableQuestions = questions;
        }

        let randomIndex = Math.floor(Math.random() * availableQuestions.length);
        let selectedQuestion = availableQuestions[randomIndex];
        usedQuestions.push(selectedQuestion.id);

        return selectedQuestion;
}


let questionline = getRandomQuestion(level)

let currentQuestion = questionline.question;
let curentAnswer = questionline.answer;

if (question > 5) {
        level++;
}


if (document.getElementById("Timer").innerText.length != 0) {
        Timer()
}


function Timer() {

        let CT = 60;
        let Minuter = 2;
        setInterval(() => {
                CT--;
                if (Minuter == 2) {
                        document.getElementById("Timer").innerText = `2 : ${CT}`;
                        if (CT == 0) {
                                Minuter--;
                                CT = 60;
                        }
                }
                else if (Minuter == 1) {
                        document.getElementById("Timer").innerText = `1 : ${CT}`;
                        if (CT == 0) {
                                Minuter--;
                                CT = 60;
                        }
                } else if (Minuter == 0) {
                        document.getElementById("Timer").innerText = `0 : ${CT}`;
                        if (CT < 0) {
                                document.getElementById("Timer").innerText = "Times Up";
                                let auto_submit = setInterval(submitform(), 3000);

                                console.log(document.getElementById("N").value, document.getElementById("S").value)

                                function submitform() {
                                        document.getElementById("N").value = document.getElementById("name").innerText;
                                        document.getElementById("S").value = question - 1;
                                        document.getElementById("result-submit").submit();
                                }
                        }
                } else {
                        console.log("Times Up")
                }

        }, 1000);
}

//send the question to page

document.getElementById("main-question").innerHTML = currentQuestion
document.getElementsByClassName("cracker")

function startGame() {
        document.getElementById("question").innerHTML = "Question " + question;
        document.getElementById("level").innerHTML = "Level " + level1;

}


function check() {
        if (curentAnswer.toLowerCase() == document.getElementById("input-ans").value.toLowerCase()) {
                document.getElementsByClassName("cr")[0].classList.add("cracker")
                document.getElementsByClassName("cr")[1].classList.add("cracker")
                document.getElementsByClassName("cr")[2].classList.add("cracker")
                document.getElementsByClassName("cr")[3].classList.add("cracker")
                document.getElementsByClassName("cr")[4].classList.add("cracker")
                document.getElementsByClassName("cr")[5].classList.add("cracker")
                document.getElementById("main-box").classList.add("write_ans")
                nextquestion()

        }
        else {
                document.getElementsByClassName("joker-img")[4].classList.add("rotate-joker")
                document.getElementById("life").style = "display:none"
                document.getElementById("main-box").classList.add("wrong_ans")
                document.getElementById("score").style = "visibility:visible"
                document.getElementById("main-question").classList.add("visibility")
                document.getElementById("joker").classList.add("visibility")
                document.getElementById("input").classList.add("visibility")
                document.getElementsByTagName("header")[0].classList.add("visibility")
                setTimeout(() => {
                        document.getElementById("main-box").classList.remove("wrong_ans")
                }, 3000)
                let auto_submit = setInterval(submitform(), 3000);

                console.log(document.getElementById("N").value, document.getElementById("S").value)

                function submitform() {
                        document.getElementById("N").value = document.getElementById("name").innerText;
                        document.getElementById("S").value = question - 1;
                        document.getElementById("result-submit").submit();
                }


        }

}

function useJoker() {
        joker++;
        if (joker <= 2) {
                document.getElementById("joker").classList.add("used-joker-animation")
                document.getElementById("joker").innerText = curentAnswer
                document.getElementsByClassName("joker-" + joker)[0].style = "display:none"
        } else {
                alert("You have Used all Jokers !!!")
        }
}

function nextquestion() {
        questionline = getRandomQuestion(level)
        currentQuestion = questionline.question
        curentAnswer = questionline.answer

        if (question == 5) {
                level++;
                console.log("if ==5 ", level)
        } else if (question == 10) {
                level++;
                console.log("if == 10", level)
        }
        question++;
        if (question <= 5) {

                document.getElementById("question").innerHTML = "Question " + question;
                document.getElementById("level").innerHTML = "Level " + level1;
                document.getElementById("main-question").innerHTML = currentQuestion
                document.getElementById("input-ans").value = ""
                document.getElementById("joker").classList.remove("used-joker-animation")
                document.getElementById("joker").classList.add("joker")
                document.getElementById("joker").innerHTML = ` Use Joker
                <img class="joker-img" src="imges/joker imj.png" alt="Joker Img" />`
                setTimeout(() => {
                        document.getElementsByClassName("cr")[0].classList.remove("cracker")
                        document.getElementsByClassName("cr")[1].classList.remove("cracker")
                        document.getElementsByClassName("cr")[2].classList.remove("cracker")
                        document.getElementsByClassName("cr")[3].classList.remove("cracker")
                        document.getElementsByClassName("cr")[4].classList.remove("cracker")
                        document.getElementsByClassName("cr")[5].classList.remove("cracker")
                        document.getElementById("main-box").classList.remove("write_ans")
                        document.getElementById("main-box").classList.remove("wrong_ans")

                }, 3000)

        }
        else if (question > 5 && question <= 10) {
                if(level == 1){
                        level++;
                }
                console.log("if" + level)
                console.log("if2" + level)
                console.log(question)
                console.log("before" + level2_question)
                document.getElementById("question").innerHTML = "Question " + level2_question;
                level2_question++;
                console.log("after" + level2_question)
                document.getElementById("level").innerHTML = "Level " + level2;
                document.getElementById("main-question").innerHTML = currentQuestion
                document.getElementById("input-ans").value = ""
                document.getElementById("joker").classList.remove("used-joker-animation")
                document.getElementById("joker").classList.add("joker")
                document.getElementById("joker").innerHTML = ` Use Joker
                <img class="joker-img" src="imges/joker imj.png" alt="Joker Img" />`
                setTimeout(() => {
                        document.getElementsByClassName("cr")[0].classList.remove("cracker")
                        document.getElementsByClassName("cr")[1].classList.remove("cracker")
                        document.getElementsByClassName("cr")[2].classList.remove("cracker")
                        document.getElementsByClassName("cr")[3].classList.remove("cracker")
                        document.getElementsByClassName("cr")[4].classList.remove("cracker")
                        document.getElementsByClassName("cr")[5].classList.remove("cracker")
                        document.getElementById("main-box").classList.remove("write_ans")
                        document.getElementById("main-box").classList.remove("wrong_ans")
                }, 3000)
        }
        else {
                if (question === 16) {
                        let auto_submit = setInterval(submitform(), 3000);

                        console.log(document.getElementById("N").value, document.getElementById("S").value)

                        function submitform() {
                                document.getElementById("N").value = document.getElementById("name").innerText;
                                document.getElementById("S").value = question - 1;
                                document.getElementById("result-submit").submit();
                        }
                }
                console.log(question)
                console.log("before" + level3_question)
                document.getElementById("question").innerHTML = "Question " + level3_question;
                level3_question++;
                console.log("after" + level3_question)
                document.getElementById("level").innerHTML = "Level " + level3;
                document.getElementById("main-question").innerHTML = currentQuestion
                document.getElementById("input-ans").value = ""
                document.getElementById("joker").classList.remove("used-joker-animation")
                document.getElementById("joker").classList.add("joker")
                document.getElementById("joker").innerHTML = ` Use Joker
                <img class="joker-img" src="imges/joker imj.png" alt="Joker Img" />`
                setTimeout(() => {
                        document.getElementsByClassName("cr")[0].classList.remove("cracker")
                        document.getElementsByClassName("cr")[1].classList.remove("cracker")
                        document.getElementsByClassName("cr")[2].classList.remove("cracker")
                        document.getElementsByClassName("cr")[3].classList.remove("cracker")
                        document.getElementsByClassName("cr")[4].classList.remove("cracker")
                        document.getElementsByClassName("cr")[5].classList.remove("cracker")
                        document.getElementById("main-box").classList.remove("write_ans")
                        document.getElementById("main-box").classList.remove("wrong_ans")
                }, 3000)
        }



}
function wronganswer() {
        fetch('/result.html')
                .then(response => {
                        if (!response.ok) {
                                throw new Error('Network response was not ok');
                        }
                        return response.text();
                })
                .then(data => {

                        console.log('Response:', data);
                })
                .catch(error => {
                        console.error('Error during fetch operation:', error.message);
                });


}
function addribbon() {
        document.getElementsByTagName("tr")[0].classList.add("ribbon");
}

startGame()