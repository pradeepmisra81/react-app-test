import React from "react";
import "../Styles/MainPage.css"

const MainPage = () => {

  return (
    <div className="mainPage">
      <table>
        <th>
          <h1>ReactJS Interview Questions & Answers {'\n'}</h1>
        </th>
        <tr>
          <h2>1. What is React?</h2>
        </tr>
        <tr>
          <p className="answer">React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. Get more details here <a href="https://reactjs.org/docs/getting-started.html">ReactJS</a></p>
        </tr>
        <tr>
          <h2>2. What are the major features of React?</h2>
        </tr>
        <tr>
          <p className="answer">The major features of React are:</p>

          <tr>
            <td className="answer">
              <strong>Virtual DOM</strong>
            </td>
            <td className="answer">
              A virtual DOM object is a representation of the original DOM object. It works like a one-way data binding. Whenever any modifications happen in the web application, the entire UI is re-rendered in virtual DOM representation. Then it checks the difference between the previous DOM representation and new DOM. Once it has done, the real DOM will update only the things that have actually changed. This makes the application faster, and there is no wastage of memory.
            </td>
          </tr>

          <tr>
            <td className="answer">
              <strong>JSX</strong>
            </td>
            <td className="answer">
              It uses JSX. JSX stands for JavaScript XML. It is a JavaScript syntax extension. Its an XML or HTML like syntax used by ReactJS.
            </td>
          </tr>

          <tr>
            <td className="answer">
              <strong>One way data binding</strong>
            </td>
            <td className="answer">
              ReactJS is designed in such a manner that follows unidirectional data flow or one-way data binding. The benefits of one-way data binding give you better control throughout the application.
            </td>
          </tr>

          <tr>
            <td className="answer">
              <strong>Components</strong>
            </td>
            <td className="answer">
              ReactJS is all about components. ReactJS application is made up of multiple components, and each component has its own logic and controls. These components can be reusable which help you to maintain the code when working on larger scale projects.
            </td>
          </tr>


          <tr>
            <td className="answer">
              <strong>Simplicity</strong>
            </td>
            <td className="answer">
              ReactJS uses JSX file which makes the application simple and to code as well as understand. We know that ReactJS is a component-based approach which makes the code reusable as your need. This makes it simple to use and learn.
            </td>
          </tr>

          <tr>
            <td className="answer">
              <strong>Performance</strong>
            </td>
            <td className="answer">
              ReactJS is known to be a great performer. This feature makes it much better than other frameworks out there today. The reason behind this is that it manages a virtual DOM. The DOM is a cross-platform and programming API which deals with HTML, XML or XHTML. The DOM exists entirely in memory. Due to this, when we create a component, we did not write directly to the DOM. Instead, we are writing virtual components that will turn into the DOM leading to smoother and faster performance.
            </td>
          </tr>

        </tr>
      </table>

    </div>
  )
}

export default MainPage;