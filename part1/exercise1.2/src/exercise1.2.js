import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return (
    <div>
    <h1>{props.courseTitle}</h1>
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
    <p>{props.title} {props.exercises}</p>
    </div>
  )
}

const Content = (props) => {

  return (
    <div>
    <Part title={props.parts[0]} exercises= {props.exercises[0]}/>
    <Part title={props.parts[1]} exercises= {props.exercises[1]}/>
    <Part title={props.parts[2]} exercises= {props.exercises[2]}/>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
    <p> Number of exercises {props.exercises[0] + props.exercises[1] + props.exercises[2]}</p>
    </div>
  )
}
const App = () => {
  const course = 'Half Stack application development'
  const parts = ['Fundamentals of React', 'Using props to pass data', 'State of a component'
  ]
  const exercises = [
    10, 7, 14
  ]

  return (
    <div>
      <Header courseTitle={course}/>
      <Content parts={parts} exercises={exercises}/>
      <Total exercises={exercises}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
