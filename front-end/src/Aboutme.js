import './aboutme.css'

/**
 * A React component that represents the Home page of the app.
 * @param {*} param0 an object holding any props passed to this component from its parent component
 * @returns The contents of this component, in JSX form.
 */
const Aboutme = props => {
  return (
    <>
      <h1>Hi there, I'm Sid</h1>
      <p>I'm a second-year undergraduate student from New York University.</p>
      <p>
        I chose to major in computer science because it affords me the opportunity to explore my passion for solving problems with my hand. I love to engage in this end-to-end experience which is fulfilling to me because I get to not only brings up an idea but also bring it to fruition.
      </p>
    </>
  )
}

// make this component available to be imported into any other file
export default Aboutme
