/*******************************************
STEP 1
before document ready we are defining all the functions and we explain what they should be doing when used
********************************************/

/*function to add items in the list*/
function addItems() {
    //check if the targeting is working
    //alert("I've just activated the addItems() function");

    var itemValue = $('#addItemValue').val();

    //validate input
    if (itemValue.length === 0) {
        alert('You have to add something!!!');
    } else {
        //dynamicaly create one row inside the shopping list
        var row = $('<li><button class="checkbox">✓</button><span class="list"> ' + itemValue + ' </span><button class="delete">x</button></li>');
        $('.shopping-list').append(row);
    }

    //empty the input box after submit by resetting the value
    $('#addItemValue').val('');
}

/*function to check items in the list*/
function checkItems() {
    //check if the targeting is working
    //alert("I've just activated the checkItems() function");

    //$(this) means that on WHATEVER you just clicked (the checkbox button), go to the parent of it (in our case the LI above the it) and add / remove the "ticked" class to it
    $(this).parent().toggleClass('selected');
}

/*function to delete one item at a time*/
function deleteOneItem() {
    //check if the targeting is working
    //alert("I've just activated the deleteOneItem() function");

    //$(this) means that on WHATEVER you just clicked (the delete one item button), go to the parent of it (in our case the LI above it) and remove the parent and everything inside it
    $(this).parent().remove();
}

/*function for button to clear the list*/
function clearList() {
    //check if the targeting is working
    //alert("I've just activated the clearList() function");
    $('.shopping-list').empty();
}

/********************************************
STEP 2
Inside document ready we are calling all the functions (we used them) and connect them with the containers in HTML (for example the #add-button from HTML will be connected with the addItem function)
********************************************/


$(document).ready(function () {

    /*on click on the #addItem activate function add item*/

    $('#addItem').on('click', function () {
        addItems();
    });


    /*on click on the #clearAll activate function clear the list*/

    $('#clearAll').on('click', function () {
        clearList();
    });
    //closing document ready
});

/*on click on the .checkbox activate function check items*/

$(document).on('click', '.checkbox', checkItems);

/*on click on the .delete activate function delete one item*/

$(document).on('click', '.delete', deleteOneItem);

/*add item on enter*/
$(document).on('keypress', function (key) {
    //keyCode == 13 is the ENTER key
    if (key.keyCode == 13) {
        addItems();
    }
});
