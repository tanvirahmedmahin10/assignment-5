# Assignment 5

A modern and responsive web application built as part of Assignment 5. The project demonstrates the use of React with TypeScript and provides a clean, component-based user interface.

# Features

* *Clean & Responsive UI* — Simple and user-friendly interface that works across different screen sizes.
*  *Dynamic React Components* — Built with reusable React components for a smooth and organized application structure.
* *Type-Safe Development* — Uses TypeScript to make the code more reliable, maintainable, and easier to understand.

# Technologies Used

* ⚛️ React
* 📘 TypeScript
* ⚡ Vite
* 🎨 CSS
* 🔧 ESLint / Oxlint

# 🌐 Live Demo

https://assignment-5-mahin16.vercel.app/

# Project Purpose

This project was created to practice modern frontend development concepts, including React components, TypeScript, project organization, and responsive UI development.

---

# Developed by

*Tanvir Ahmed Mahin*

If you like this project, consider giving the repository a star!


# Q&A:

1.What is JSX, and why is it used in React?
Ans:
Jsx let us write html code directly in javascript files

it is used mainly because it is easy to read and write.you can also find what code you wrote very easily

2.What is the difference between props and state?
Ans:

Props is where a data is sent to a component from its parent while State is data is created in the component

3.What does the useState hook do, and where did you use it in this project?
Ans:

useState returns two things : current value and the function which is used to update the current value

I used both of the time in App.tsx file


4.What does the useEffect hook do, and why did you need it to load the JSON data?
Ans:

After the Component is shown,it runs the code

Fetching data takes a lot of time.Use effect is used here to reduce that time

5.Why does every item in a .map() list need a unique key prop?
Ans:

Because without it the browser console shows an error

6.What is conditional rendering? Show one place you used it (example: the empty stack message).
Ans:

Showing or Hiding different UI parts based on a if/else condition

Example:
you can see that in my TechnologyAdd.tsx you can see that from line 26 conditional rendering is used if there is no items that it will show something else it will show other things
<!--  
if (added.length === 0) {
  return (
    <div className="p-6 rounded-xl shadow-lg">
      <h2 className="text-xl font-semibold mb-2">Your Stack</h2>
      <p className="text-sm text-slate-400 py-1 rounded-full mb-3">
        No technologies selected yet
      </p>
      <p className="text-slate-400 text-sm text-center border-2 border-dotted border-gray-200 p-7 rounded-lg">
        Your stack is empty.
      </p>
    </div>
  );
}

return (
  <div>
    <div className="grid grid-cols-1 gap-3 p-4">
      <h2 className="text-xl font-semibold mb-2">Your Stack</h2>
      <p className="text-sm text-slate-400 py-1 rounded-full mb-3">
        {added.length} Technologies Selected
      </p>
    </div>
  </div>
);
);
-->
7.How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
Ans:

The Parent passes data down to children through props

The parent passes down a function. When the child calls that function, it passes data back up inside it




