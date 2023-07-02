const App = () => {
  const Header = (props) => {
    return (
      <h1>{props.course}</h1>
    )
  }

  const SubContent = (props) => {
    return (
      <p>{props.part} {props.exercise}</p>
    )
  }

  const Content = (props) => {
    return (
      <>
        <SubContent part={props.parts[0].name} exercise={props.parts[0].exercises} />
        <SubContent part={props.parts[1].name} exercise={props.parts[1].exercises} />
        <SubContent part={props.parts[2].name} exercise={props.parts[2].exercises} />
      </>
    )
  }
  
  const Total = (props) => {
    let totalCount = 0;
    for (let i = 0; i < props.parts.length; ++i) {
      totalCount += props.parts[i].exercises;
    }
    return (
      <p>Number of exercises {totalCount}</p>
    )
  }

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
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default App