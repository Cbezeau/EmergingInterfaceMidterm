
Survey
    .StylesManager
    .applyTheme("default");

var json = {
    title: "Employee Screening",
    pages: [
        {
            questions: [
                {
                name: "idealjob",
                title: "What is your ideal job?",
                type: "text",
                },
                {
                type: "text",
                name: "work here",
                title: "Why do you want to work here?",
                choicesOrder: "random",
                }
            ]
        }, {
            questions: [
                {
                    type: "text",
                    name: "contribute",
                    title: "What can you contribute to our company?",
                    choicesOrder: "random",
                },
                {
                    type: "text",
                    name: "attributes",
                    title: "What attributes are you looking for in a employer?",
                    choicesOrder: "random",
                }
            ]
        }, {
            questions: [
                {
                    type: "text",
                    name: "past experiences",
                    title: "How would your past experiences infleunce your decisions you would make here?",
                    choicesOrder: "random",
                },
                {
                    type: "text",
                    name: "role model",
                    title: "Who would you consider a role model, and why?",
                    choicesOrder: "random",
                }
            ]
        }, {
            questions: [
                {
                type: "text",
                name: "best",
                title: "What do you do best?",
                choicesOrder: "random",
                },
                {
                type: "text",
                name: "motivates",
                title: "What motivates you to come to work everyday?",
                choicesOrder: "random",
                }
            ]
        }, {
            questions: [
                {
                    type: "text",
                    name: "tick",
                    title: "What makes you tick?",
                    choicesOrder: "random",
                },
                {
                type: "text",
                name: "challenge",
                title: "Tell me about a time you overcame a challenge?",
                choicesOrder: "random",
               
                }
            ]
        }
    ],
    completedHtml: "<h4>You have answered correctly <b>{correctedAnswers}</b> questions from <b>{questionCount}</b>.</h4>"
};

window.survey = new Survey.Model(json);

survey
    .onComplete
    .add(function (result) {
        document
            .location = "indexthanks.html";
    });

$("#surveyElement").Survey({ model: survey });