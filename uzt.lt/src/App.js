import React, { Fragment, useState, useEffect } from "react";
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
  {/* 
      !!!   Watch how to insert with FormData     !!!

    var histo = new FormData();
    histo.append('id_booking', this.last_id);
    histo.append('name', this.name);
    histo.append('email', this.email);

    axios.all([
     axios.post("domain.com/api/v1/booking").then(response => (this.last_id = response.data['last_id'])),
  */}
  const getLastId = () => { 
    axios.get('http://localhost:3001/newsletters/').then( (response) => {
 
        const lastId = JSON.stringify(response.data[response.data.length-1].id);
 
        return lastId;
   });
  }
  
  const AddSubscription = (userEmail) => {
    axios({
        method: "post",
        url: "http://localhost:3001/newsletters/",
        data:{
          id: getLastId()+1,
          email: userEmail,
          isSet: true 
        },
        headers: {
          // Overwrite Axios's automatically set Content-Type
          'Content-Type': 'application/json'
        }
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
      url: "http://localhost:3001/newsletters/${id}"
    }).then(function (response) {
        //handle success
          console.log(response);
    }).catch(function (response) {
        //handle error
        console.log(response);
    });
  }

  const FetchSubscription = (id) => { 
    axios.get('http://localhost:3001/newsletters/${id}').then( (response) => {
        console.log(response); 
        const subData = response.data; 
        return subData;
    });
  }
  {/* Getting data from db */}
  const [getSub, setSubscriptions] = useState([]);

  const FetchSubscriptions = () => { 
    axios.get('http://localhost:3001/newsletters/').then( (response) => {
        console.log(response); 
        const subData = response.data; 
        setSubscriptions(subData);
    });
  }
  
  useEffect(() => FetchSubscriptions(), [])
  
  {/* Adding functionality to Add button */}
  const [getNewsletterValue, setNewsletterValue] = useState(null);
  function HandleChange(event) {
    setNewsletterValue(event.target.value);
  };

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
                {/*<input type="text" value="17" ref={textInput}/>*/}
                <input
                className="searchbar"
                type="text"
                placeholder="Type an interest ..."
                value={getNewsletterValue}
                onChange={HandleChange}/>
              </div>
                {
                  getSub.map((newsletter) => (
                  <List key={newsletter.id}>
                        <ListItem alignItems="flex-start">
                          <ListItemText primary={newsletter.id} secondary={newsletter.email} lole={newsletter.isSet}/>
                        </ListItem>
                  </List>)
                  ) 
                }
                  
                {/* Getting ef input value */}
                <Button variant="outlined" onClick={() => { AddSubscription(getNewsletterValue) }} >Add Value</Button>
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
