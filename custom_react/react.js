// const mainContainer = document.getElementById('root')
// const reactElement = {
//   types : 'a',
//   props : {
//     href : "http://www.google.com",
//     target : "_blank"
//   } ,
//   children : "This is a custom react Element "
// }

// function customRender (){
//   const domElement = document.createElement(reactElement.type) ;
//   domElement.innerHTML = reactElement.children ;
//   domElement.setAttribute('href', reactElement.props.href) ;
//   domElement.setAttribute('target', reactElement.props.target) ;
//   mainContainer.appendChild(domElement)
// }

// customRender(reactElement, mainContainer)

// Grab the div from HTML 
const mainContainer = document.getElementById('root');

const createElement = (type, props, children) => {
  return { type, props, children };
};

const renderElement = (reactElement, container) => {
  const { type, props, children } = reactElement;

  const domElement = document.createElement(type);
  domElement.innerHTML = children;
  
  for (const prop in props) {
    if (props.hasOwnProperty(prop)) {
      domElement.setAttribute(prop, props[prop]);
    }
  }

  container.appendChild(domElement);
};

const customRender = (reactElement, container) => {
  // Simulate componentDidMount
  console.log("Component did mount");

  renderElement(reactElement, container);
};

const reactElement = createElement('a', {
  href: 'http://www.google.com',
  target: '_blank'
}, 'This is a custom React Element');
customRender(reactElement, mainContainer);
