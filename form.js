const registerBtn = document.querySelector('#registerBtn')
const firstName = document.querySelector('#first-name')
const lastName = document.querySelector('#last-name')
const email = document.querySelector('#email')
let isFormValid = true

// create a function that will return an html element
// with the given tag name and text content
const createElement = (tag, text) => {
  const elem = document.createElement(tag)
  elem.textContent = text
  return elem
}

const validationFn = (event) => {
  const type = event.target.type
  let isValid = false
  switch (type) {
    case 'text':
      isValid = isAlphabet(event.target.value)
      break
    case 'email':
      isValid = isEmail(event.target.value)
      break
    case 'date':
      isValid = isFutureDate(event.target.value)
      break
  }
  if (!isValid) {
    isFormValid = false
    event.target.style.border = '2px solid red'
    const span = createElement('span', 'First name should contain only alphabets')
    span.style.color = 'red'
    if (!event.target.parentNode.querySelector('span')) {
      event.target.parentNode.appendChild(span)
    }
  } else {
    event.target.style.border = '2px solid green'
    const errorSpan = event.target.parentNode.querySelector('span')
    if (errorSpan) {
      errorSpan.remove()
    }
  }
}

// passing function as an argument to another function
firstName.addEventListener('focusout', validationFn)
lastName.addEventListener('focusout', validationFn)
email.addEventListener('focusout', validationFn)

// Function will be elevated to the top of the file
// also called as hoisting
// Here the variable registerForm is holding the function reference
const registerForm = (event) => {
  console.log('register')
  console.log(event)
}
registerBtn.addEventListener('click', registerForm)

// create a function that will accept a string and return true of the
// string contains only alphabets and false otherwise
const isAlphabet = (str) => /^[a-zA-Z]+$/.test(str)

// create a function that will accept a string and return true if it
// is a valid email
const isEmail = (str) => /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(str)

// create a function that will check of the date is in the future
const isFutureDate = (date) => new Date(date) > new Date()