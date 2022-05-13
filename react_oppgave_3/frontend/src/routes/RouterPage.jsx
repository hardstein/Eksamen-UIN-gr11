import { Route, Routes } from 'react-router-dom'
import Lesson from '../components/Lesson'
import Layout from '../layout/Layout'
import Course from '../pages/Course'
import Courses from '../pages/Courses'
import Create from '../pages/Create'
import SignUp from '../pages/SignUp'

function RouterPage() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<SignUp />} />
        <Route path="kurs">
          <Route index element={<Courses />} />
          <Route path=":courseSlug" element={<Course />}>
            <Route path=":lessonSlug" element={<Lesson />}></Route>
          </Route>
        </Route>
        <Route path="ny" element={<Create />} />
      </Route>
    </Routes>
  )
}

export default RouterPage
