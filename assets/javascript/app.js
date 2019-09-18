$(document).ready(function () {


    class Question {
        constructor(number, question, answer, image, wrongAnswer1, wrongAnswer2) {
            this.number = number;
            this.question = question;
            this.answer = answer;
            this.image = image;
            this.wrongAnswer1 = wrongAnswer1;
            this.wrongAnswer2 = wrongAnswer2;
        };

        Image() {
            let displayImage = $("<img>");
            displayImage.attr("src", this.image);
            displayImage.addClass("Number" + this.number); //class is required to change display property
            displayImage.css("display", "none"); //immediately set to display none so nothing is shown
            $("#image-holder").append(displayImage);
        };

    };

    // let question1 = new Question(1, "What color is the sky?", "Blue", "assets/images/test.png", "Red", "Green" );
    // let question2 = new Question(2, "Is the earth flat", "No", "assets/images/test2.png", "Yes", "Maybe" );
    // let question3 = new Question(3, "blank q", "blank a", "assets/images/test2.png", "none", "none" );

    // question1.Image();
    // question2.Image();
    // question3.Image();




    //create object for each question
    let question1 = new Question(1, "What color is the sky?", "Blue", "assets/images/trivia1.png", "Red", "Green");
    let question2 = new Question(2, "Is the earth flat", "No", "assets/images/trivia2.png", "Yes", "Maybe");
    let question3 = new Question(3, "a question", "an answer", "img src", "a wrong", )


    let displayArray = [question1.Image(), question2.Image(),];


    for (i = 0; i < displayArray.length; i++) {
        //counter
        //while (counter > 0)
        //on click for correct button
        //if correct, display correct
        //else display wrong
        //empty divs for question --> emptyImage();
    }


    function game() {
        for (i = 0; i < displayArray.length; i++) {
            setTimeout(displayQuestion(i + 1), 2000) //timeout doesn't work...

            //run counter
            //while (counter > 0)
            //display the current question (i + 1)
            //on click for correct button
            //if correct, tell user is correct
            //else tell user is wrong
            //empty divs for question --> emptyImage();

        }
    }

    function displayQuestion(currentQ) {
        $(".Number" + (currentQ)).css("display", "block");
    }



    // setTimeout(displayQuestion, 2000); //just displays both images after 2sec...

   
    game();


    function startTimer() {

        let counter = 10;
        $("#timer").text(counter);

        function count() {
            counter--;
            $("#timer").text(counter);
            if (counter === 0) {
                clearInterval(intervalId);
                console.log("timer hit zero")
            }
        }

        // let intervalId;
        function timer() {
            intervalId = setInterval(count, 1000);

        }

        timer();

    }

    startTimer();




    console.log(question1);
    console.log(question2);
    console.log(question3);
    // console.log(questionArray);



});







//using prototype model instead of class


// function Question(number, question, answer, image, wrongAnswer1, wrongAnswer2) {
    //     this.number = number;
    //     this.question = question;
    //     this.answer = answer;
    //     this.image = image;
    //     this.wrongAnswer1 = wrongAnswer1;
    //     this.wrongAnswer2 = wrongAnswer2;
    // }

    // Question.prototype.Image = function () {
    //     let displayImage = $("<img>");
    //     displayImage.attr("src",this.image);
    //     displayImage.addClass("image");
    //     $(".image").css("display", "none");
    //     $("#image-holder").append(displayImage);
    // }