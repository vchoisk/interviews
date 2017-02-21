/**
 * Created by VictorChoi on 2/21/17.
 */
document.addEventListener("DOMContentLoaded", function() {

  // Save the entire entire form to a variable to have a clear copy available.
  const DMmyForm = document.getElementsByClassName('myform')[0].cloneNode('false');

  // This function attaches the form to target element.
  // (first argument tells the function where to attach the new form too)
  const addForm = (where, e) => {
    e.preventDefault();

    const target = (where === 'bro') ? e.target.parentNode.parentNode : e.target.parentNode;

    // Cloned the node because I do not want the values and child associated with the element
    const DMnewForm = DMmyForm.cloneNode('false');
    decorateForm(DMnewForm); // decorate it
    target.appendChild(DMnewForm); // add it to target
  }

  const addInput = (e) => {
    e.preventDefault();
    console.log(e.target);
  }


  // Decorates the given node to have correct event listners;
  const decorateForm = (domNode) => {
    domNode.getElementsByClassName('new-line')[0].addEventListener('click', addForm.bind(null, 'bro'));
    domNode.getElementsByClassName('new-nested')[0].addEventListener('click', addForm.bind(null, 'child'));
    domNode.getElementsByClassName('new-input')[0].addEventListener('click', addInput);
  }

  decorateForm(document.getElementsByClassName('myform')[0]);


});