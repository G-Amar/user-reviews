import { Link } from "react-router-dom"
import Card from "../components/shared/Card"

const AboutPage = () => {
  return (
    <Card>
      <div className="about">
        <h1>About</h1>
        <p>This is a React App where you can leave user reviews</p>

        <Link to="/">Back to home</Link>
      </div>
    </Card>
  )
}

export default AboutPage