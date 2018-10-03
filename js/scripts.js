// function sendNow(name,email) {
//   this.firstName = first;
//   this.lastName = last;
//   this.travavelPackage = [];
//   this.noOfPeople=[];
//   this.arrivalDate=[];
//   this.departureDate=[];
// }

var sendNow = function( yourName, yourEmail, travavelPackage, noOfPeople,  arrrivalDate, departureDate) {
  return yourName + yourEmail + travavelPackage + NoOfPeople + arrrivalDate + departureDate;

}//End of Business logic

//User Interface
$(document).ready(function(event){
  $("form#form-group").submit(function(event){

  event.preventDefault();
  var name =document.getElementById('Name').value;
  var emailAddress =document.getElementById('email').value;
  var travavelPackage =document.getElementById('Travavel Package').value;
  var arrivalDate =document.getElementById('arrive').value;
  var departureDate =document.getElementById('depart').value;


  var formGroup = sendNow(yourName, yourEmail, travavelPackage, noOfPeople,  arrrivalDate, departureDate)
  $(".form-group").hide();
  console.log("send");
  //$("#outputs").text(invitedGroup)
});
});




$(document).ready(function(){
       $("#back-1").click(function(){
         $(".Details1").hide();
         $(".Details2").show();
       });
       $("#back-2").click(function(){
         $(".Details3").show();
         $(".Details2").hide();
       });
     });
