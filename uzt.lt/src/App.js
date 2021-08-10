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
    axios.get('http://localhost:3001/newsletters/')
    .then((response) => {
        const lastId = JSON.stringify(response.data[response.data.length-1].id);
        return lastId;
   });
  }

  const AddSubscription = (userEmail) => {
    axios.post('http://localhost:3001/newsletters/', {
      id: getLastId()+1,
      email: userEmail,
      isSet: true,
        headers: {
        // Overwrite Axios's automatically set Content-Type
        'Content-Type': 'application/json'
        }
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  const getIDviaEmail = (setEmail) => { 
    const [getResponse, setResponse] = useState([]);

    useEffect(() => {
    axios.get('http://localhost:3001/newsletters/', {
      params: {
        email: setEmail
      }
    })
    .then((response) => {
      //const emailID = response.data[0].id;
      let id = response.data[0].id;
      setResponse(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
  },[])

  return <div><ul>{
        getResponse.map(post => <li key={getResponse.id}>{getResponse.id}</li>)
    }
    </ul></div>
  }
 

  const DeleteSubscription = (setIDEmail) => {
    let abc = getIDviaEmail('aivaras.adukauskas@gmail.com');
    
    const getResult = (abc)=>{
      abc.getPromise()
          .then(function(response) {
              console.log("response:" +response)
              return response;
          })
    }    
    getResult(abc);
 
    axios.delete("http://localhost:3001/newsletters/",{
      params:{
        id: 2
      }
    })
    .then((response) => {
        //handle success
        console.log(response);
    }).catch((response) => {
        //handle error
        console.log(response);
    });
  }

  const FetchSubscription = (id) => { 
    axios.get('http://localhost:3001/newsletters/${id}')
    .then((response) => {
        console.log(response); 
        const subData = response.data; 
        return subData;
    });
  }
  {/* Getting data from db */}
  const [getSub, setSubscriptions] = useState([]);

  const FetchSubscriptions = () => { 
    axios.get('http://localhost:3001/newsletters/')
    .then((response) => {
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

  {/* Adding functionality to Add button */}

  const [getDeleteValue, setDeleteValue] = useState(null);
 
  function HandleDelete(event) {
    setDeleteValue(event.target.value);
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
                className="AddBar"
                type="text"
                placeholder="Type in your email"
                value={getNewsletterValue}
                onChange={HandleChange}/>

                <input
                className="DeleteBar"
                type="text"
                placeholder="Type in your email"
                value={getDeleteValue}
                onChange={HandleDelete}/>
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
                <Button variant="outlined" onClick={() => { DeleteSubscription(getDeleteValue) }} >Remove Value</Button>  
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
