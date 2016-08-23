// Structure
// ------------------------------------------------
var form     = document.querySelector("form"),
    panelBody = document.querySelector(".panel-body"),
    messageForm = document.querySelector(".message-form"),
    button     = document.querySelector("button");

    var fbRef = new Firebase("https://todolist-9831b.firebaseio.com/");

// Setup
// ------------------------------------------------
var messageList = {
    "message": []
};

// Events
// ------------------------------------------------
window.addEventListener("load", messageList);
form.addEventListener("button", addMessage);


// Event Handlers
// ------------------------------------------------
function addMessage(event) {
    event.preventDefault();

    // create JSON for new item
    var message = {
        id: id.value,
        content: "..."
        voteCount: 
        dateCreated:
    };

    createTodoItem(item);

    todoList.tasks.push(item);
    saveTodoList();

    form.reset();
};

function itemClicked(event) {

    var checkbox = event.target;

    todoList.tasks.forEach(updateTaskCompletedProperty);

    function updateTaskCompletedProperty(item) {
        // the span comes after the checkbox, so you can
        // use "nextSibling" (method on an Element object)"
        // to get the span element after the checkbox
        var span = checkbox.nextSibling;

        // check if this is the item in the array matching the 
        // one that was clicked by comparing the name text
        if (span.textContent === item.name) {

            // if the item in the array was found,
            // set its "completed" property in the JSON 
            // equal to the checked state of the checkbox 
            // to keep the JSON in sync with the UI
            // See the "checked" property:
            // https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement
            item.completed = checkbox.checked;
        }
    }

    saveTodoList();
};