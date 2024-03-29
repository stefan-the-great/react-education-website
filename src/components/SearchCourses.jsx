import React from 'react';
import '../css/searchCourses.scss'

function SearchCourses() {
  return (
    <section id='search-courses'>
        <h2>Search Courses</h2>
        <form action="" method="">
            <input type="search" name="course-search" id="course-search" placeholder='Search for over 50+ courses' />
            <button type="" className='gradient-btn'>Search</button>
        </form>
    </section>
  )
}

export default SearchCourses