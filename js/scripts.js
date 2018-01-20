$("document").ready(function(){
  $("#form1").submit(function(event){
    event.preventDefault();

    //var num = parseInt($("#input").val());

    function convertToRoman(num){
      var romanToNum = {
        M:1000,
        D:500,
        C:100,
        L:50,
        X:10,
        V:5,
        I:1
    }; //end key val w semi colon

    var roman = ""; //empty string to recieve rom nums

    for(var key in romanToNum){
      while(num >= romanToNum[key]){
        roman += key;
        num -= romanToNum[key];
      }
    }

    return roman;
    console.log(roman);

    }; //end convertToRoman

    convertToRoman(num);

  }); //end submit handler
}); //end doc ready handler

//when looping through object use "for var in" loop
