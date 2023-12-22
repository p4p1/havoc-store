havoc-store
============
A simple website to act as a store for havoc modules and extensions!
![image](https://github.com/p4p1/havoc-store/assets/19672114/2229802e-ac69-40cf-b7b5-726ef9dcdce9)
The objective is to have a space to find new pluggins for the havoc framework. In the future maybe have a system
to automatically install them also from this page like a proper store. Please refer to the [Havoc Framework](https://havocframework.com/)
for more information on the project that led to this.

## Adding a module to Havoc
To add a module open the client-frontend of havoc and select the Scripts then open the scripts manager:
![image](https://github.com/p4p1/havoc-store/assets/19672114/1df4bcaf-e438-4571-a4ed-ee3cf81e3369)
You can then load a script through the load script button.

## Add your pluggins
To add plugins you need to edit the file in _public/havoc-modules.json_ This is the current file to save
pluggins inside of the website. You can add a module by forking this project adding a entrance to the json using
this following json object template:
```json
  {
    "title":"<your title>",
    "description":"<Your description>",
    "author":"<Your username on github>",
    "link":"<the link to the module>",
    "preview":"<The preview image of the module>",
    "entrypoint":"<The entrypoint script of the module",
    "category": {
        "BOF": false,
        "Console": false,
        "Graphical": true
    }
  }
```
You can also select if the plugin is either a console or GUI pluggin through the boolean values!

## Future additions to this project
 - More modules ....
 - A better front-end.
 - Funcitonal Category system - DONE
 - Github login and form to automatically do a pull request with the JSON from the front-end
 - A way to have inside of a json the path to the script that would need to be imported by Havoc to automate the "add pluggin" system - DONE
