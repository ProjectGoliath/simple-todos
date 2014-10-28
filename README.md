simple-todos MAC ONLY
============
CANNOT run this through gh-pages. Need to connect MongoDB someway if we want to web host this.

A very simple todo app created through meteor

In order to run this, install meteor: https://www.meteor.com/ <br>
In terminal type: curl https://install.meteor.com/ | sh

Once installed, in terminal go to the directory simple-todos. Then type <b>meteor</b> then press ENTER.<br>
localhost:3000

In order to have items saved in your local environment, create a new tab in your terminal and type: <b>meteor mongo</b>. This creates a MongoDB instance in your local environment. Data entered from the app will be saved inside. If you want to manually enter data through terminal enter: <b>db.tasks.insert({ text: "Hello world!", createdAt: new Date() });</b>.
