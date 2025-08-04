import { parse, feedback, symptomInfo, misconceptionInfo, counterSymptomInfo, conceptInfo } from "../SIDE-lib/side-lib.es.js";

const FEEDBACK_HOST = "https://supportive-ide.github.io/symptom-feedback";

const code = 'def get_direction(start, end):\n    if start < end:\n        print("Southbound")\n    elif start > end:\n        print("Northbound")\n    else:\n        start == end\n        print("Invalid")\n\ndirection = get_direction(8, 7)';
document.getElementById("code").innerHTML = code;
const f = feedback(code);
const feedbackLink = `${FEEDBACK_HOST}${f.feedback[0].extendedFeedbackParams}`;
// feedback()
document.getElementById("feedback-output").innerHTML = JSON.stringify(f, null, 4);
document.getElementById("feedback-url").innerHTML = `<a href="${feedbackLink}" target="_blank">${feedbackLink}</a>`;
// parse()
document.getElementById("output").innerHTML = JSON.stringify(parse(code), null, 4);

// symptoms
document.getElementById("symptoms").innerHTML = JSON.stringify(symptomInfo(), null, 4);

// counter symtpoms
document.getElementById("counterSymptoms").innerHTML = JSON.stringify(counterSymptomInfo(), null, 4);

// misconceptions
document.getElementById("misconceptions").innerHTML = JSON.stringify(misconceptionInfo(), null, 4);

// concepts
document.getElementById("concepts").innerHTML = JSON.stringify(conceptInfo(), null, 4);