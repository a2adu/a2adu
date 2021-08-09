import React, { Fragment, useState, useEffect, createRef } from "react";
import axios from 'axios';
import logo from "./logo.svg";
import "./App.css";
import "./Styles.css";
import Header from "./components/Header";
import TopNav from "./components/TopNav";
import ContainerMenu from "./components/ContainerMenu";
import Infobar from "./components/Infobar";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import FooterBottom from "./components/FooterBottom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card, Form } from 'react-bootstrap';
import { ListItem, ListItemText, List } from '@material-ui/core';
import Button from '@material-ui/core/Button';

function App() {
  const [data, setData] = useState(null);
  const [query, setQuery] = useState('/express_backend');
 
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `${query}`,
      );

      setData(result.data.express);
    };
 
    fetchData();
  }, []);

  {/*
      *****************************************
      Axios post,get,delete,fetch,etc...
      *****************************************
  */}
  


  const AddSubscription = (num) => {
    {/*
    
      ********* Test this later ******************
      
    bodyFormData.append('image', ImageFile); might append an image file too
    let bodyFormData = new FormData();
    bodyFormData.append({id}, 'aivarasa2@gmail.com');

     axios({
    data: bodyFormData, }

    */}
    
    axios({
        method: "post",
        url: "http://localhost:3001/tasks/",
        id: num,
        email: 'freddyb34@gmail.com',
        isSet: true 

      }).then(function (response) {
          //handle success
            console.log(response);
      }).catch(function (response) {
          //handle error
          console.log(response);
     });
  }

  const DeleteSubscription = (id) => {
    axios({
      method: "delete",
      url: "http://localhost:3001/tasks/${id}"
    }).then(function (response) {
        //handle success
          console.log(response);
    }).catch(function (response) {
        //handle error
        console.log(response);
    });
  }

  const FetchSubscription = (id) => { 
    axios.get('http://localhost:3001/tasks/${id}').then( (response) => {
        console.log(response); 
        const subData = response.data; 
        return subData;
    });
  }

  const [getSub, setSubscriptions] = useState([]);

  const FetchSubscriptions = () => { 
    axios.get('http://localhost:3001/tasks/').then( (response) => {
        console.log(response); 
        const subData = response.data; 
        setSubscriptions(subData);
    });
  }
  
  useEffect(() => FetchSubscriptions(), [])
  let textInput = createRef();

  return (
    <div className="App">
    {/* Container element from bootstrap */}
    <Container fluid> 
      {/* ReactJS element <Fragment> and imports */}
      <Fragment>
        <Header />
        <TopNav />
        <ContainerMenu />
	       <div className="App-nx">
            <p className="App-intro">
              <div className="App-data">
                { data }
                {/* console.log(FetchSubscription(1)) */}
                {/* console.log(FetchSubscriptions()) */ }
                <div className="test" style={{backgroundColor: 'red', width: '200px', height: '300px'}}>
                {/* createRef being used to get value */}
                <input type="text" value="false" ref={textInput}/>
                { AddSubscription(3) }
                </div>
                {
                  getSub.map((newsletter) => (
                    <List key={newsletter.id}>
                        <ListItem alignItems="flex-start">
                          <ListItemText primary={newsletter.id} secondary={newsletter.email} lole={newsletter.isSet}/>
                        </ListItem>
                    </List>
                  )

                  ) }
                  {/* Getting ef input value */}
                  <Button variant="outlined" onClick={() => { AddSubscription(textInput.current.value);}} >Add Value</Button>
              </div>
            </p>
        </div>
        <Infobar />
        <Footer />
        <Newsletter />
        <FooterBottom />
      </Fragment>
    </Container>
  </div>
    
  );
   
}

export default App;
