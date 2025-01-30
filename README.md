# SIDE-lib

## Quick Start
The library is provided as an ES6 module. Add `SIDE-lib/side-lib.es.js` to your project to use it. The library contains four functions:
* `feedback(json_str, includeParseOutput = false)`: Takes a string of Python source code and returns a JSON object containing basic information to provide guidance for each detected indicator--it's type, location, the affected text, a brief message to notify the coder, and more detailed information in the form of URL parameters. The URL parameters can be used to link to extended online guidance. See the example for more. 
* `parse(json_str)`: Takes a string of Python source code and returns a JSON object containing information about the symptom and misconception indicators detected in the source code. 
* `symptomInfo()`: Returns a JSON object listing all symptoms currently supported by SIDE-lib.
* `misconceptionInfo()`: Returns a JSON object listing all misconception indicators currently supported by SIDE-lib.

Note: detailed documentation about the JSON objects returned by each function is coming soon (but not that soon...). In the meantime, please get in touch via the email address on [our Github page](https://github.com/Supportive-IDE) for more information and help.

A basic usage example is provided in this repo. For a more developed example of how the library can be used, see our online Python IDE: [demo](https://supportive-ide.github.io/web-IDE/)| [Github repo](https://github.com/Supportive-IDE/web-IDE).


## More information
For more detailed information on how the library works and its limitations, please see: [https://supportive-ide.github.io/symptom-checker/](https://supportive-ide.github.io/symptom-checker/)
