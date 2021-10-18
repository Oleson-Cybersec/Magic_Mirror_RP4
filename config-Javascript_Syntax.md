# General Rules for Javascript Files (.js) -- Config.js
## Syntax - `token: value`
```
module: "weather",
position: "top_left"
```

* Word/token left of `:` does NOT need quotes
* Values right of `:` conditionally need quotes
    * If the value is a number (24, ; -73.983552)  or  boolean (true ; false)  -- Do NOT need quotes
    * if it contains other characters ("Bobby" ; "12FFs234q" ; "11:23") -- Needs quotes

* I recommemend indending each line that goes together to make your code more human-readable
* Commas need to go after each line, except for the last value line

## Brackets
* Every starting bracket, needs an identical twin to close it out - `{ }` ; `[ ]` ; `( )`
* Add a comma after the last bracket to let javascript know it's you're closing this group out

```
{
    module: "weather",
    position: "top_left"
},
```
* {  } is a structure/object with name/value pairs  
    * Between identifying modultes for the objects

* [  ] is a list [ 1,2,3,4] or [ first.second,third]
    * After `"English 101": [1, 3],` for the classes below. This is due to the doucmentation for the list (0=Sunday thru 6=Saturday)


You _can_ write lists and objects all on one line (_what a pain_)
or across multiple lines... (much more human-readable!)
* You still NEED commas between items in either 


```
{
    module: "MMM-MyStudyLife",
    position: "bottom_right",
    config: {
        code: "AAAAAAAAAAAAAAAAAAAA:BBBBBBBBBBBBBBBBBBBBBBBBBBB=",	
        showSchedule: true,
        showExams: true,
        showTasks: true,
        classes: {
            "English 101": [1,3],
            "Computing": [1],
            "Intro to Networking": [3],
            "Statistics": [4],
            "Psychology 102": [6]
                }
        }
},
```
## Commenting Out Code
* Creating comments is a great way for people to read more documentation without javascript reading it in your code.

* `// ` at the beginning of your line with comment out the rest of your line
    * You don't need add anything else to the end of your sentence
    * Words should appear greyed out
        * ` // This is a test `   


### Test your config.js file:
Run this command on your terminal within the `~/MagicMirror` to check for syntax errors
* `npm run config:check`

* If u get an error that says you got an "unexpected token" 99% of the time, that is a missing comma for the line above the target token.(
    * error on line 45, look at line 44)
