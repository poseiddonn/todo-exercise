/*

  Objective: Make a to-do list using the HTML, CSS and Javascript files supplied. The HTML and CSS are already prepared for you, so you only need to edit the JS file.

  There are three elements that exist on the HTML to make note of:
    - The form
    - The input
    - The ul

  A user is expected to type into the input box, and when they press enter to submit, the text they entered should be posted as a new list element into the ul element on the page.

  You will need to make use of event listeners, particularly the .addEventListener() method, to accomplish this. You can learn more about event listeners on Blackboard, or via the MDN: https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener

  Note: Be sure to prevent the default behaviour of the submit event!

  Every time the user submits, the page should generate:
    - An <li> element
    - A <p> element within the <li> which contains the submitted text

  For example, if I enter "learn Javascript" into the input and hit enter, the following should be appended to the ul element:

  <li>
    <p>learn Javascript</p>
  </li>

  After the to-do entry is submitted, the input can then be emptied out by setting the element's value to a blank string (""), allowing the user to write new entries.

  There are multiple ways to accomplish all of the above, but it's recommended you research and make use of the following methods, specifically:

    - document.querySelector()  -> Targets/captures HTML elements
    - document.createElement()  -> Creates new HTML elements
    - .addEventListener()       -> Attaches an event listener to an element
    - .appendChild()            -> Appends an element as the child of another element

  BONUS:

  Attach an event listener to new entries that, when clicked, will toggle on/off the class "done" to their respective <li> element (the .done class has already been styled for you). This will allow users to click an entry and toggle it as "done", as though they've finished the task.

  For example, if I clicked on my previously-made entry, it would then look like:

  <li class="done">
    <p>learn Javascript</p>
  </li>

  ...and if I clicked it again, the class would be removed.

  You can learn how to toggle classes (and other ways of manipulating classes for elements) by checking Blackboard or via the MDN: https://developer.mozilla.org/en-US/docs/Web/API/Element/classList

  BONUS BONUS:

  Let's add a Date to each posted task. It will live in a second <p> element as a sibling to the task text. So in effect, new tasks will look like the following:

  <li>
    <p>learn Javascript</p>
    <p>Wed Nov 19 2025</p>
  </li>

  Maybe we could add the time too?

*/

// Defining app elements
const input = document.querySelector('input[type=text]'); // Our input box!
const form = document.querySelector('form');  // The form
const results = document.querySelector('.results'); // UL containing to-do list items!

// \/ \/ \/ \/ WRITE YOUR CODE BELOW THIS LINE! \/ \/ \/ \/

form.addEventListener("submit", (e) => {
  e.preventDefault()
  postItem()
})

const postItem = () => {
  const task = input.value
  const listItem = document.createElement("li")
  listItem.addEventListener("click", function() {
    this.classList.toggle("done")
  })
  const text = document.createElement("p")
  text.textContent = task
  listItem.appendChild(text)
  results.appendChild(listItem)
  input.value = ""
}
