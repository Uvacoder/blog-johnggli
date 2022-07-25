import React, { useState, useEffect } from 'react'
import moment from 'moment'
import parse from 'html-react-parser'

const Comments = ({ slug }) => {
  const [Comments, setComments] = useState([])

  useEffect(() => {
    getComments(slug)
  }, [])
  

  return (
    <div>Comments</div>
  )
}

export default Comments
