# SIDE-lib

## Quick Start V3
The library is provided as an ES6 module. Add `SIDE-lib/side-lib.es.js` to your project to use it. The library contains six functions:
* `parse(json_str, { showSymptoms= true, showMisconceptions= true, showCounterSymptoms= false,showConcepts= false })`: Takes a string of Python source code and returns a JSON object containing information about the symptom and misconception indicators detected in the source code. In V3 and above, pass an object as an optional second parameter to configure whether or not to include information about symptoms, misconceptions, counter symptoms, and concepts. By default, only symptoms and misconceptions are included. Most Python source code will have many more detected counter symptoms and concepts than symptoms and misconceptions so enabling this information can substantially increase the size of the JSON object returned by the function.
* `feedback(json_str, includeParseOutput = false, parseOptions = {})`: Takes a string of Python source code and returns a JSON object containing basic information to provide guidance for each detected misconception indicator--it's type, location, the affected text, a brief message to notify the coder, and more detailed information in the form of URL parameters. The URL parameters can be used to link to extended online guidance. See the example for more. The `includeParseOutput` parameter is option and can be used to combine `parse` output with feedback. In V3 and above, pass an optional `parseOptions` object to configure which information to include in the parse output. See the `parse` documentation for information.
* `symptomInfo()`: Returns a JSON object listing all symptoms currently supported by SIDE-lib.
* `counterSymptomInfo()`: Returns a JSON object listing all counter symptoms currently supported by SIDE-lib. Counter symptoms are indicators that suggest a specific concept has been used correctly.
* `misconceptionInfo()`: Returns a JSON object listing all misconception indicators currently supported by SIDE-lib.
* `conceptInfo()`: Returns a JSON object listing all concept indicators currently supported by SIDE-lib. Concept indicators are the opposite of misconception indicators and suggest the coder does understand a specific concept.

Note: detailed documentation about the JSON objects returned by each function is coming soon (but not that soon...). In the meantime, please get in touch via the email address on [our Github page](https://github.com/Supportive-IDE) for more information and help.

A basic usage example is provided in this repo. For a more developed example of how the library can be used, see our online Python IDE: [demo](https://supportive-ide.github.io/web-IDE/)| [Github repo](https://github.com/Supportive-IDE/web-IDE).


## More information
For more detailed information on how the library works and its limitations, please see: [https://supportive-ide.github.io/symptom-checker/](https://supportive-ide.github.io/symptom-checker/)
