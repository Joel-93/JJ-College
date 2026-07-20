import { useState } from 'react';

const initialCourses = [
  { id: 1, name: 'B.E Computer Science Engineering', degree: 'B.E', duration: '4 Years', intake: 120 },
  { id: 2, name: 'B.Tech Information Technology', degree: 'B.Tech', duration: '4 Years', intake: 120 },
  { id: 3, name: 'B.Tech Artificial Intelligence & Data Science', degree: 'B.Tech', duration: '4 Years', intake: 60 },
  { id: 4, name: 'B.E Electronics & Communication Engineering', degree: 'B.E', duration: '4 Years', intake: 90 },
];

const Courses = () => {
  const [courses, setCourses] = useState(initialCourses);

  const deleteCourse = (id) => {
    setCourses(courses.filter((c) => c.id !== id));
  };

  const addCourse = () => {
    const newCourse = {
      id: Date.now(),
      name: 'New Course',
      degree: 'B.E',
      duration: '4 Years',
      intake: 60,
    };
    setCourses([...courses, newCourse]);
  };

  const editCourse = (id) => {
    alert(`Edit course with ID: ${id} (demo)`);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-indigo-900">Manage Courses</h2>
        <button onClick={addCourse} className="bg-indigo-900 text-white px-4 py-2 rounded-lg hover:bg-indigo-800 transition">
          Add Course
        </button>
      </div>
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-slate-200">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase">Course Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase">Degree</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase">Duration</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase">Intake</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {courses.map((course) => (
                <tr key={course.id} className="hover:bg-slate-50">
                  <td className="px-6 py-4 text-sm font-medium text-slate-900">{course.name}</td>
                  <td className="px-6 py-4 text-sm text-slate-600">{course.degree}</td>
                  <td className="px-6 py-4 text-sm text-slate-600">{course.duration}</td>
                  <td className="px-6 py-4 text-sm text-slate-600">{course.intake}</td>
                  <td className="px-6 py-4 text-sm space-x-2">
                    <button onClick={() => editCourse(course.id)} className="text-indigo-600 hover:underline">Edit</button>
                    <button onClick={() => deleteCourse(course.id)} className="text-red-600 hover:underline">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Courses;