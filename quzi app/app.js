let html = [
    {
        question: 'What does HTML stand for?',
        option1: 'Hyperlinks and Text Markup Language',
        option2: 'Hypertext Markup Language',
        option3: 'Home Tool Markup Language',
        correctOption: "Hypertext Markup Language"
    },
    {
        question: 'Who is making the Web standards?',
        option1: 'Google',
        option2: 'The World Wide Web Consortium',
        option3: 'Microsoft',
        correctOption: "The World Wide Web Consortium"
    },
    {
        question: 'Choose the correct HTML element for the largest heading:',
        option1: '<heading>',
        option2: '<h6>',
        option3: '<h1>',
        correctOption: "<h1>"
    },
    {
        question: 'What is the correct HTML element for inserting a line break?',
        option1: '<linebreak>',
        option2: '<br>',
        option3: '<break>',
        correctOption: "<br>"
    },
    {
        question: 'What is the correct HTML for adding a background color?',
        option1: '<body bg="yellow">',
        option2: '<background>yellow</background>',
        option3: '<body style="background-color:yellow;">',
        correctOption: '<body style="background-color:yellow;">'
    },
    {
        question: 'Choose the correct HTML element to define important text:',
        option1: '<strong>',
        option2: '<b>',
        option3: '<i>',
        correctOption: '<strong>'
    },
    {
        question: 'Choose the correct HTML element to define emphasized text:',
        option1: '<italic>',
        option2: '<i>',
        option3: '<em>',
        correctOption: "<em>"
    },
    {
        question: 'What is the correct HTML for creating a hyperlink?',
        option1: '<a>http://www.w3schools.com</a>',
        option2: '<a href="http://www.w3schools.com">W3Schools</a>',
        option3: '<a url="http://www.w3schools.com">W3Schools.com</a>',
        correctOption: '<a href="http://www.w3schools.com">W3Schools</a>'
    },
    {
        question: 'Which character is used to indicate an end tag?',
        option1: '*',
        option2: '/',
        option3: '<',
        correctOption: "/"
    },
    {
        question: 'How can you open a link in a new tab/browser window?',
        option1: '<a href="url" target="new">',
        option2: '<a href="url" new>',
        option3: '<a href="url" target="_blank">',
        correctOption: '<a href="url" target="_blank">'
    },
    {
        question: 'Which of these elements are all <table> elements?',
        option1: '<table> <tr> <td>',
        option2: '<table> <head> <tfoot>',
        option3: '<table> <tr> <tt>',
        correctOption: "<table> <tr> <td>"
    },
    {
        question: 'Inline elements are normally displayed without starting a new line.',
        option1: 'True',
        option2: 'False',
        correctOption: "True"
    },
    {
        question: "How can you make a numbered list?",
        option1: '<dl>',
        option2: '<ul>',
        option3: '<ol>',
        option4: '<list>',
        correctOption: "<ol>"
    },
    {
        question: 'How can you make a bulleted list?',
        option1: '<ol>',
        option2: '<list>',
        option3: '<ul>',
        option4: '<dl>',
        correctOption: "<ul>"
    },
    {
        question: 'What is the correct HTML for inserting an image?',
        option1: '<img alt="MyImage">image.gif</img>',
        option2: '<img href="image.gif" alt="MyImage">',
        option3: '<img src="image.gif" alt="MyImage">',
        option4: '<image src="image.gif" alt="MyImage">',
        correctOption: '<img src="image.gif" alt="MyImage">'
    },
    {
        question: 'What is the correct HTML for making a checkbox?',
        option1: '<iput type="check">',
        option2: '<check>',
        option3: '<checkbox>',
        option4: '<input type="checkbox">',
        correctOption: '<input type="checkbox">'
    },
    {
        question: "What is the correct HTML for making a text input field?",
        option1: '<input type="textfield">',
        option2: '<input type="text">',
        option3: '<textfield>',
        option4: '<textinput type="textfield">',
        correctOption: '<input type="text">'
    },
    {
        question: 'What is the correct HTML for making a drop-down list?',
        option1: '<input type="list">',
        option2: '<list>',
        option3: '<input type="dropdown">',
        option4: '<select>',
        correctOption: '<select>'
    },
    {
        question: 'What is the correct HTML for making a text area?',
        option1: '<input type="textbox">',
        option2: '<input type="textarea">',
        option3: '<textarea>',
        correctOption: '<textarea>'
    },
    {
        question: 'What is the correct HTML for inserting a background image?',
        option1: '<background img="background.gif">',
        option2: '<body bg="background.gif">',
        option3: '<body style="background-image:url(background.gif)">',
        correctOption: '<body style="background-image:url(background.gif)">'
    }
]
const form=document.querySelector("#for")
const para=document.querySelector("#para")
const option1=document.querySelector("#optiontext1")
const option2=document.querySelector("#optiontext2")
const option3=document.querySelector("#optiontext3")
const btn=document.querySelector("#btn")
const time=document.querySelector("#time")
const out=document.querySelector("#out")
let index= 0;
let mask=0;
let min= 1;
let sec= 59;
let outOf=0
let intna= html.length

let timeer= setInterval (function(){
    time.innerHTML= `Timer: ${min} : ${sec}`
    sec--
    if(sec < 0){
       min--
       sec=59
    }
    if(min  < 0){
        
        min =1;
        sec =59
        next()
    }
},1000)


function next(){
    const getoption=document.getElementsByName('option')
    for(let i=0; i < getoption.length; i++){
        if(getoption[i].checked){
            let selectedValue = getoption[i].value
            let selectedAns= html[index -1][`option${selectedValue}`] 
            let curreut= html[index -1].correctOption
            console.log(curreut + selectedAns)
            if(curreut == selectedAns){
            
                mask++
            }
            
            
        }
        getoption[i].checked=false
    }
    if(index > html.length -1){

        let per = ( mask / html.length.toFixed(2) )*100
        if(per > 90){
            alert("your Persontage " + per +  " Your grade (A1) Congratulations" )
        }
         else if(per > 80){
            alert("Your persontage "+ per + " Youe grade (A) “excellent”")
        }
        else if(per > 70){
            alert("Your persontage " + per + "Your grade (B)  To work hard")

        }
         else if(per >60){
            alert("Your persontage " + per + " Your garde (C)   To work very hard ")
        }
        else{
            alert('Your persontage ' + per + ' Your garde (F) POOR')
        }
    }
    else{
        para.innerText=html[index].question
        option1.innerText=html[index].option1
        option2.innerText=html[index].option2
        option3.innerText=html[index].option3
        index++
        outOf++
        out.innerHTML=`Question  ${outOf} of  ${intna} :`
        btn.disabled=true
    }
}
next()

function clicked(){
    btn.disabled=false
}