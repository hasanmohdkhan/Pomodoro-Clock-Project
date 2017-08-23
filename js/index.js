$(document).ready(function () {

  //  var buzzar= $("#buzzar")[0];
    //buzzar.play();

   var audio = new Audio('sound1.mp3');
   // audio.play();
  var breakAudio = new Audio('doorbell.mp3');


   //converting num string to number type
    var count = parseInt($("#num").html());
   // for break
    var breakCount = parseInt($("#num2").html());

    /*
    *  FUNCTION FOR START BUTTON WHEN TIMER FINISHED THEN STOP IT
    * */

    $("#start").click(function () {

        var counter = setInterval(timer , 1000);
        count*=60;
        function timer() {
            // HIDE BUTTONS
            $("#start , #sessionPlus , #sessionMinus ,#breakMinus ,#breakPlus,#breakTitle ,#num2 ,#reset ").hide();
            $("#sessionTitle").html("Session timer: ");

              count -=1;
              if(count===0){
                  audio.play();
                  clearInterval(counter);
                  $("#sessionTitle").html("Session Time");
                  count=5;
                  $("#sessionTitle,#num").hide();

                  var startBreak = setInterval(breakTimer , 1000);
                  breakCount*=60;
              }
              //logic to format TIME
            if(count % 60 >= 10)
            {
              $("#num").html(Math.floor(count/60) + ":" +count%60);

            }

            else
            {
                $("#num").html(Math.floor(count/60) + ":"+ "0"+count%60);
            }

            // **** END logic to format TIME




              function breakTimer() {
                  $("#breakTitle").html("Break Timer: ");
                      $("#breakTitle, #num2").show();
                      breakCount -= 1;
                      $("#num2").html(breakCount);
                      console.log(breakCount);

                if (breakCount === 0)
                {
                     breakAudio.play();
                     clearInterval(startBreak);
                     breakCount=5;
                     $("#num2").html(breakCount).hide();
                     $("#breakTitle").html("Break Time ").hide();
                     $("#reset").show();
                }

                  if(breakCount % 60 >= 10)
                  {
                      $("#num2").html(Math.floor(breakCount/60) + ":" +breakCount%60);

                  }

                  else
                  {
                      $("#num2").html(Math.floor(breakCount/60) + ":"+ "0"+breakCount%60);
                  }

                  // **** END logic to format TIME



              }


        }


    });


    /*  END
     *  FUNCTION FOR START BUTTON WHEN TIMER FINISHED THEN STOP IT
     * */


    /*
        Here Logic for Reset Button
     */


    $("#reset").click(
        function () {
            console.log("Reset ");
            count=5;
            breakCount=5;
            $("#num").html("5");
            $("#num2").html("5");

            $("#start , #sessionPlus , #sessionMinus ,#breakMinus ,#breakPlus,#breakTitle ,#sessionTitle,#num2 ,#num,#reset").show();
             $("#reset").hide();
        }


    );





    /* END
       Here Logic for Reset Button
     */










    // Hiding reset button
    $("#reset").hide();
    
    // Onclick value change function
    $("#sessionMinus").click(function () {
        $("#reset").show();
        if(count>5){
            count-=5;
            console.log(count);
            $("#num").html(count);
        }
        else{
            console.log("number is less than 5");
        }

    });
    
  // Function for plusSession button

    $("#sessionPlus").click(function () {
        $("#reset").show();
            count +=5;
            console.log(count);
            $("#num").html(count);
    });

    // END OF Function for plusSession button

    /*  START OF FUNCTION
      *  For break button +/-
      *
      * */

    // Onclick value change function
    $("#breakMinus").click(function () {

        if(breakCount>5){
            breakCount -=5;
            console.log(breakCount);
            $("#num2").html(breakCount);
        }
        else{
            console.log("number is less than 5");
        }

    });

    // Function for plusSeesion button

    $("#breakPlus").click(function () {

        breakCount +=5;

        console.log(breakCount);
        $("#num2").html(breakCount);



    });

        /*  END OF FUNCTION
         *  For break button +/-
         *
         * */




});