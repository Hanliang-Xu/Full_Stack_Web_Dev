import React from 'react'

const Courses = ({courses}) => {
  return(
    <>
      <h1>Web Development Curriculum</h1>
      {courses.map(course =>
        <>
          <h2 key={course.id}>{course.name}</h2>
          <Course parts={course.parts}></Course>
        </>
      )}
    </>
  )
}

const Course = ({parts}) => {
  const total = parts.reduce((accumulator, currentValue) => {
    return (
      accumulator + currentValue.exercises
    )
  }, 0);

  return (
    <>
      {parts.map(part => 
        <Part key={part.id} name={part.name} exercises={part.exercises}></Part>
      )}
      <b>total of {total} exercises</b>
    </>
  )
}

const Part = ({name, exercises}) => {
  return (
    <p>
      {name} {exercises}
    </p>
  )
}
export default Courses