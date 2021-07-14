import React from 'react'

const Header = (props) => {
  return (
    <div>
      <h1>{props.course.name}</h1>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      {props.course.parts.map(part => {
        return (<p>
          {part.name} {part.exercises}
        </p>
        )
      })}
    </div>
  )
}

const Total = (props) => {
  let sum = 0
  props.course.parts.map(part => {
    sum = sum + part.exercises
  })
  return (
    <div>
      <p>Number of exercises {sum}</p>
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course} />
      <Content course={course}  />
      <Total course={course}  />
    </div>
  )
}

export default App