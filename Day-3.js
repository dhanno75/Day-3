// Day 3 Task
// (1) For the given JSON iterate over all for loops (for, forEach, for of, for in)

let obj = [
  { person: "Vivek", age: 25, company: "Walmart" },
  { person: "Manisha", age: 28, company: "Facebook" },
  { person: "Hema", age: 42, company: "Google" },
  { person: "Shanta Rao", age: 47, company: "Oracle" },
];

// for loop
for (let i = 0; i < obj.length; i++) {
  console.log(
    `Name: ${obj[i].person}
     Age: ${obj[i].age}
     Company: ${obj[i].company} 
    `
  );
}

// forEach loop
obj.forEach((el) =>
  console.log(
    `Name: ${el.person}
   Age: ${el.age}
   Company: ${el.company} 
  `
  )
);

// for of loop
for (let val of obj) {
  console.log(
    `Name: ${val.person}
     Age: ${val.age}
     Company: ${val.company} 
    `
  );
}

// for in loop
for (let index in obj) {
  console.log(
    `Name: ${obj[index].person}
     Age: ${obj[index].age}
     Company: ${obj[index].company} 
    `
  );
}

// Output for all the for loops is

// Name: Vivek
// Age: 25
// Company: Walmart

// Name: Manisha
// Age: 28
// Company: Facebook

// Name: Hema
// Age: 42
// Company: Google

// Name: Shanta Rao
// Age: 47
// Company: Oracle

// (2) Create your own resume data in JSON format
const myResume = [
  {
    name: "P Dhananjay",
    email: "pdhananjay@gmail.com",
    phone: 9922099220,
    address: {
      state: "Karnataka",
      city: "Bangalore",
      pincode: 560099,
    },
    education: [
      {
        institute: "Sacred Heart High School",
        degree: "12th",
        branch: "Science",
        percentage: 65,
      },
      {
        institute: "Alliance University",
        degree: "B.Tech",
        branch: "Computer Science & Engineering",
        percentage: 67,
      },
    ],
    skills: [
      "HTML",
      "CSS",
      "PHP",
      "Javascript",
      "Bootstrap",
      "JSON",
      "Good communication",
    ],
    experience: [
      {
        company: "24[7].ai",
        role: "Advisor",
        duration: 0.8,
        jd: "Handling queries of the customers via chat",
      },
      {
        company: "Ingenuous technologies",
        role: "Business development executive",
        duration: 2,
        jd: "Identifying, researching and targeting new business prospects",
      },
    ],
    certifications: [
      {
        courseName: "PHP OOP bootcamp",
        certificationName: "Udemy",
        year: 2021,
      },
      {
        courseName: "HTML & CSS",
        certificationName: "Udemy",
        year: 2021,
      },
    ],
    projects: [
      {
        name: "The Book Directory App",
        about:
          "A simple book directory app where an overview of books is displayed, built using HTML, CSS, Bootstrap",
      },
    ],
    activities: ["random photography", "old music"],
  },
];

console.log(myResume);

/* (3) Read about the difference between window, screen and document in javascript

-> Document object
   - Javascript document object is an object that provides access to all HTML elements of a document.
   - With the help of document objects, we can add dynamic content to our web page.
   - It is loaded inside the window.
   - It is object of the window property.
   - The document object consists of tags, elements with attributes in HTML.
   - We can access the document from a window using the window.document.
   - The document is part of browser object model and document object model.
   - Properties of document objects such as title, body, cookies, etc can also be accessed by a window like this window.document.title.
   - Syntax: document.propertyname;
   - Some methods of document object are addEventListener(), adoptNode(), close(), createAttribute(), createElement(), createEvent(), createComment(), getElementById(), getElementsByClassName(), getElementsByName(), getElementsByTagName(), querySelector(), querySelectorAll(),..... etc.

-> Window object
   - Window object represents a browser window that displays the contents of the webpage.
   - Whenever a window appears on the screen to display the contents of the document, the window object is created.
   - Window is the very first object that is loaded in the browser.
   - It is object of the browser.
   - Global objects, functions and variables of javascript are members of the window object.
   - We can access the winow from the window only (window.window).
   - The window is part of browser object model.
   - Properties of the window object cannot be accessed by the document object.
   - Syntax: window.propertyname;
   - Some methods of window object are alert(), atob(), blur(), btoa(), clearInterval(), clearTimeout(), close(), confirm(), focus(), open(), prompt(),..... etc.
   
-> Screen object
   -The Screen interface represents a screen, usually the one on which the current window is being rendered, and is obtained using window.screen
   - It is object of the window property.
   - It can be used to display screen width, height, colorDepth, pixelDepth etc. It is not mandatory to write window prefix with screen object. It can be written without window prefix.
   - Some properties of screen object are Screen.availTop, Screen.availLeft, Screen.availHeight, Screen.availWidth, Screen.avail.colorDepth, Screen.height, Screen.left,..... etc.
   */
