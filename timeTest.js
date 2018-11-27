
//It's just me, writing a programme to do sth I could do much faster.

// Here lies the first draft
/*var controlFlowTimeTotal = 20+40+40+60+40+60+60+10+60;
var controlFlowTimeHr = Math.floor(controlFlowTimeTotal / 60);
var controlFlowTimeMin = controlFlowTimeTotal % 60;
toString(controlFlowTimeHr);
toString(controlFlowTimeMin);
var controlFlowTime = controlFlowTimeHr + " hours and " + controlFlowTimeMin + " minutes.";
console.log(controlFlowTime);*/

//section to determine predicted course time
var time = function(actual) {
    var hr = Math.floor(actual[1] / 60);
    var min = actual[1] % 60;
    var tellTime = actual[0] + " is expected to take " + hr + " hours and " + min + " minutes.";
    console.log(tellTime);
}
var introToJavascript = ["Introduction to Javascript Course", 30+60+40+40+60+10+60];
time(introToJavascript);

var controlFlow = ["Control Flow Course", 20+40+40+60+40+60+60+10+60];
time(controlFlow);

var functions = ["Function Course", 30+40+60+40+10+60];
time(functions);

var objects = ["Objects Course", 60+60+60+10+60];
time(objects);

var theDOM = ["The DOM Course", 40+60+60+60+10+60];
time(theDOM);

var workplaceRediness = ["Workplace Readiness", 480];

//section to determine actual course time and comparison to predicted time
var compare = function(actual, anticipated) {
    var percent = Math.floor((actual[1]/anticipated[1]) * 100);
    var hr = Math.floor(actual[1] / 60);
    var min = actual[1] % 60;
    var getComparison = actual[0] + " was completed in " + hr + " hours and " + min + " minutes, which is " + percent + "% of the expected time.";
    console.log(getComparison);
} 
//Actual times recorded per section
var defineSectionTime = function(lessonArray, sectionActual) {
    for (i = 0; i < lessonArray.length; i++) {
        sectionActual[1] = sectionActual[1] + lessonArray[i];
    }
}

//Control Flow Section
var controlFlowActual = [controlFlow[0], 0];
var controlFlowSectionActual = [2, 16, 20, 12, 20, 12, 39, 4, 20];
defineSectionTime(controlFlowSectionActual, controlFlowActual);
compare(controlFlowActual, controlFlow);
//Functions Section
var functionsActual = [functions[0], 0];
var functionsSectionsActual = [11, 3, 25, 5, 7, 20];
defineSectionTime(functionsSectionsActual, functionsActual);
compare(functionsActual, functions);
//Workplace Readiness
var workplaceRedinessActual = [workplaceRediness[0], 370];
compare(workplaceRedinessActual, workplaceRediness);
//Objects Course
var objectsActual = [objects[0], 0];
var objectsSectionsActual = [22, 7, 14, 2, 18];
defineSectionTime(objectsSectionsActual, objectsActual);
compare(objectsActual, objects);
//The DOM
var theDOMActual = [theDOM[0], 0];
var theDOMSectionsActual = [10, 16, 25];