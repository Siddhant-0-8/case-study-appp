import { Card } from 'react-bootstrap'
import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactPaginate from 'react-paginate';
import './Search.css';
function SearchView() {
  const data = [{

    question: '1. sunt aut facere repellat provident occaecati excepturi optio reprehenderit  ',
    answer: ' It has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.Alongside HTML and CSS, JavaScript is one of the core technologies of the World Wide Web. Over 97% of websites use it client-side for web page behavior, often incorporating third-party libraries. Most web browsers have a dedicated JavaScript engine to execute the code on the users  ',

  },
  {

    question: '2. sunt aut facere repellat provident occaecati excepturi optio reprehenderit ',
    answer: ' quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',

  },
  {

    question: '3. sunt aut facere repellat provident occaecati excepturi optio reprehenderit ',
    answer: ' quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',

  },
  {

    question: '4. sunt aut facere repellat provident occaecati excepturi optio reprehenderit ',
    answer: ' quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',

  },
  {

    question: '5. sunt aut facere repellat provident occaecati excepturi optio reprehenderit ',
    answer: ' quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',

  },
  {

    question: '6. sunt aut facere repellat provident occaecati excepturi optio reprehenderit ',
    answer: ' quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',

  },
  {

    question: '7. sunt aut facere repellat provident occaecati excepturi optio reprehenderit ',
    answer: ' quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',

  },
  {

    question: '8. sunt aut facere repellat provident occaecati excepturi optio reprehenderit ',
    answer: ' quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',

  },
  {

    question: '9. sunt aut facere repellat provident occaecati excepturi optio reprehenderit ',
    answer: ' quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',

  },
  {

    question: '10. sunt aut facere repellat provident occaecati excepturi optio reprehenderit ',
    answer: ' quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',

  },
  {

    question: '11. sunt aut facere repellat provident occaecati excepturi optio reprehenderit  ',
    answer: ' It has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.Alongside HTML and CSS, JavaScript is one of the core technologies of the World Wide Web. Over 97% of websites use it client-side for web page behavior, often incorporating third-party libraries. Most web browsers have a dedicated JavaScript engine to execute the code on the users  ',

  },
  {

    question: '12. sunt aut facere repellat provident occaecati excepturi optio reprehenderit ',
    answer: ' quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',

  },
  {

    question: '13. sunt aut facere repellat provident occaecati excepturi optio reprehenderit ',
    answer: ' quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',

  },
  {

    question: '14. sunt aut facere repellat provident occaecati excepturi optio reprehenderit ',
    answer: ' quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',

  },
  {

    question: '15. sunt aut facere repellat provident occaecati excepturi optio reprehenderit ',
    answer: ' quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',

  },
  {

    question: '1. sunt aut facere repellat provident occaecati excepturi optio reprehenderit  ',
    answer: ' It has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.Alongside HTML and CSS, JavaScript is one of the core technologies of the World Wide Web. Over 97% of websites use it client-side for web page behavior, often incorporating third-party libraries. Most web browsers have a dedicated JavaScript engine to execute the code on the users  ',

  },
  {

    question: '2. sunt aut facere repellat provident occaecati excepturi optio reprehenderit ',
    answer: ' quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',

  },
  {

    question: '3. sunt aut facere repellat provident occaecati excepturi optio reprehenderit ',
    answer: ' quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',

  },
  {

    question: '4. sunt aut facere repellat provident occaecati excepturi optio reprehenderit ',
    answer: ' quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',

  },
  {

    question: '5. sunt aut facere repellat provident occaecati excepturi optio reprehenderit ',
    answer: ' quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',

  },
  {

    question: '6. sunt aut facere repellat provident occaecati excepturi optio reprehenderit ',
    answer: ' quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',

  },
  {

    question: '7. sunt aut facere repellat provident occaecati excepturi optio reprehenderit ',
    answer: ' quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',

  },
  {

    question: '8. sunt aut facere repellat provident occaecati excepturi optio reprehenderit ',
    answer: ' quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',

  },
  {

    question: '9. sunt aut facere repellat provident occaecati excepturi optio reprehenderit ',
    answer: ' quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',

  },
  {

    question: '10. sunt aut facere repellat provident occaecati excepturi optio reprehenderit ',
    answer: ' quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',

  },
  {

    question: '11. sunt aut facere repellat provident occaecati excepturi optio reprehenderit  ',
    answer: ' It has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.Alongside HTML and CSS, JavaScript is one of the core technologies of the World Wide Web. Over 97% of websites use it client-side for web page behavior, often incorporating third-party libraries. Most web browsers have a dedicated JavaScript engine to execute the code on the users  ',

  },
  {

    question: '12. sunt aut facere repellat provident occaecati excepturi optio reprehenderit ',
    answer: ' quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',

  },
  {

    question: '13. sunt aut facere repellat provident occaecati excepturi optio reprehenderit ',
    answer: ' quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',

  },
  {

    question: '14. sunt aut facere repellat provident occaecati excepturi optio reprehenderit ',
    answer: ' quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',

  },
  {

    question: '15. sunt aut facere repellat provident occaecati excepturi optio reprehenderit ',
    answer: ' quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',

  }]

  const [pageNumber, setpageNumber] = useState(0)


  const usersPerPage = 3
  const pageVisited = pageNumber * usersPerPage
  const pageCount = Math.ceil(data.length / usersPerPage)

  const changePage = ({selected} ) => {
  
    setpageNumber(selected);
  };
  const displayUsers = data.slice(pageVisited, pageVisited + usersPerPage)
  .map((oneQuestion ,index) => {

    return <div className="container-fluid" id='body'>
      <ul className="showList m-0">
        {/* <div> */}
          <Card xs={3} md={6} ls={3}>

            <Card.Body className="" >
              <blockquote className="blockquote ">
                <li id="font"><b>{oneQuestion.question}</b></li>
                <li className="ans">{oneQuestion.answer}</li>

              </blockquote>
              {/* <i class="fas fa-check" id="icon"></i> */}

            </Card.Body>
          </Card>
        {/* </div> */}

      </ul>
      
    </div>
    

  })
  return (

    <div className="App">
      {displayUsers}
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        PageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />

    </div>

  )
}

export default SearchView
