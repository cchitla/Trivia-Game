$(document).ready(function(){


    class Question {
        constructor (number, question, answer, image, wrongAnswer1, wrongAnswer2) {
            this.number = number;
            this.question = question;
            this.answer = answer;
            this.image = image;
            this.wrongAnswer1 = wrongAnswer1;
            this.wrongAnswer2 = wrongAnswer2;
        };

        Image() {
            let displayImage = $("<img>");
            displayImage.attr("src",this.image);
            displayImage.css("display", "none");
            $("#image-holder").append(displayImage);
        };


    };
    
    // let question1 = new Question(1, "What color is the sky?", "Blue", "assets/images/test.png", "Red", "Green" );
    // let question2 = new Question(2, "Is the earth flat", "No", "assets/images/test2.png", "Yes", "Maybe" );
    // let question3 = new Question(3, "blank q", "blank a", "assets/images/test2.png", "none", "none" );
    
    // question1.Image();
    // question2.Image();
    // question3.Image();

    

    // let questionArray = [
    //     question1 = new Question(1, "What color is the sky?", "Blue", "assets/images/test.png", "Red", "Green" ),
    //     question2 = new Question(2, "Is the earth flat", "No", "assets/images/test2.png", "Yes", "Maybe" ),
    //     question3 = "",
    //     question4 = "",
    // ]



   
    //create object for each question
    let question1 = new Question(1, "What color is the sky?", "Blue", "assets/images/test.png", "Red", "Green" );
    let question2 = new Question(2, "Is the earth flat", "No", "assets/images/test2.png", "Yes", "Maybe" );

    let displayArray = [question1.Image(), question2.Image()]
    
    // for (i = 0; i < questionArray.length; i++) {

        //counter
        //while (counter > 0)
            //on click for correct button
                //if correct, display correct
                //else display wrong
        //empty divs for question --> emptyImage();
        
    // }
    
    console.log(question1);
    console.log(question2);
    // console.log(question3);
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