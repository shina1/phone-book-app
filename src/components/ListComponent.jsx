import React from 'react'

const ListComponent = () => {
    const list = [
        {
          title: 'React',
          url: 'https://reactjs.org/',
          author: 'Jordan Walke',
          num_comments: 3,
          points: 4,
          objectID: 0,
        },
        {
          title: 'Redux',
          url: 'https://redux.js.org/',
          author: 'Dan Abramov, Andrew Clark',
          num_comments: 2,
          points: 5,
          objectID: 1,
        },
        {
            title: 'Redux Tool Kit',
            url: 'https://redux.js.org/',
            author: 'Dan Abramov, Andrew Clark',
            num_comments: 5,
            points: 4,
            objectID: 2,
        },
        {
            title: 'Tailwind CSS',
            url: 'https://redux.js.org/',
            author: 'Dan Abramov, Andrew Clark',
            num_comments: 5,
            points: 4,
            objectID: 2,
        },
      ];
    return(
        <div>
            {
                list.map(el => (
                <div key={el.objectID}>
                     <h2>{el.title}</h2>
                    <a href={el.url}>link</a> <br></br>
                    <span>Author: {el.author}</span> <br></br>
                    <span>No. of Comments: {el.num_comments}</span> <br></br>
                    <span>Points: {el.points}</span>
                 </div>
                 ))
              }
        </div>
    )
}

export default ListComponent
