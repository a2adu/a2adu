import * as React from "react";
import ReactDOM from "react-dom"
import axios from "axios";
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
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Car, Form } from "react-bootstrap";
import { ListItem, ListItemText, List } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { DataGrid, GridRowParams, GridRowData } from "@material-ui/data-grid";

function App() {
  const [data, setData] = React.useState(null);
  const [query, setQuery] = React.useState("/express_backend");

  const URL = "http://localhost:3001/newsletters/"; 

  {/* 
	Connection to an express server, port 5000 via proxy

		  */}

  React.useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `${query}`,
      );

      setData(result.data.express);
    };
 
    fetchData();
  }, []);

  {/*
      ******************************************************
      Axios post,get,delete,put(update), async, await etc...
      ******************************************************
  */}

  {/* 
    Anoter example to insert data into JSON db ( using FormData()), and axios.all();
    var histo = new FormData();
    histo.append('id_booking', this.last_id);
    axios.all([
     axios.post("domain.com/api/v1/booking").then(response => (this.last_id = response.data['last_id'])),
  */}
	
  {/* Getting a last id of an inserted Newsletter */}	
  const getLastId = () => { 
    axios.get(URL)
    .then((response) => {
        const lastId = JSON.stringify(response.data[response.data.length-1].id);
        return lastId;
   });
  }

  {/* Getting data from db */}
  const [getSub, setSubscriptions] = React.useState([]);
 
  const AddSubscription = userEmail => {
    axios.post(URL, {
      id: getLastId()+1,
      email: userEmail,
      isSet: true,
        headers: {
	      // A way to overwrite the Axios's automatically set Content-Type parameters
        'Content-Type': 'application/json'
        }
    })
    .then((response) => { 
      // Setting values to an async function setPost:
	console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
  }

 async function getLId(mail) { 
   const data = await axios.get(URL,{
	params:{
		  email: mail
		}
    	}
    )
    .then((response) => {
        return JSON.stringify(response.data[0].id);
   });
   return data;
  }

  {/* getting an array as a return to a setResponse useState function  */}
  
  const DeleteSubscription = async (getEmail) => {
    const getID = await getLId(getEmail); 
    axios.delete(`${URL}${getID}`)
    .then((response) => {
        //handle success
        console.log(response);
    }).catch((response) => {
        //handle error
        console.log(response);
    });
  }

  const UpdateSubscription = async (getEmail) => {
    const getID = await getLId(getEmail); 
    axios.put(`${URL}${getID}`,{
      email: getEmail,
      isSet: true
    })
    .then((response) => {
        //handle success
        console.log(response);
    }).catch((response) => {
        //handle error
        console.log(response);
    });
  }

  const handleRowAfterEdit = (params: GridRowData) => {
    const api: Grid.api = params.api;
    const value = params.row.email;

    //https://codesandbox.io/s/fervent-pine-rvc6r?file=/src/App.tsx:2205-2409
    console.log("false");
  
  }

  const FetchSubscription = (id) => { 
    axios.get(`${URL}${id}`)
    .then((response) => {
        console.log(response); 
        const subData = response.data; 
        return subData;
    });
  }

  {/* Adding functionality to Add button */}
  
  const [getNewsletterValue, setNewsletterValue] = React.useState(null);
  
  function HandleChange(event) {
    setNewsletterValue(event.target.value);
  };

  {/* Adding functionality to Add button */}

  const [getDeleteValue, setDeleteValue] = React.useState(null);
 
  function HandleDelete(event) {
    setDeleteValue(event.target.value);
  };

  {/* Columns of data table */}

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'email',
      headerName: 'User Email',
      width: 150,
      editable: true,
    },
    {
      field: 'isSet',
      headerName: 'Is Set?',
      type: 'boolean',
      width: 110,
      editable: true,
      
    },
   
  ];

  const FetchSubscriptions = () => { 
    axios.get(URL)
    .then((response) => {
        console.log(response); 
        const subData = response.data; 
        setSubscriptions(subData);
    });
  }

  {/* Making changed data reload using React.useEffect */}
  React.useEffect(() => FetchSubscriptions());
  
  {/**
    React.useEffect(() => FetchSubscriptions(), []);
    to display data once
  */}

  return (
    <div className="App">
    {/* Container element from bootstrap */}
    
    <Container fluid> 
      {/* ReactJS element <Fragment> and imports */}
      <React.Fragment>
        <Header />
        <TopNav />
        <ContainerMenu picName='./components/images/1.png' widthImg='768'/>
	       <div className="App-nx">
            <p className="App-intro">
              <div className="App-data">
                {/* Data from express server: */}
                { data }
               
                <div className="test" style={{backgroundColor: 'red', width: '200px', height: '300px'}}>
                <input
                className="AddBar"
                type="text"
                placeholder="Type in your email"
                onChange={HandleChange}
                value={getNewsletterValue}/>
                <input
                className="DeleteBar"
                type="text"
                placeholder="Type in your email"
                value={getDeleteValue}/>
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
                <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                rows={getSub}
                columns={columns}
                pageSize={5}
                checkboxSelection
                disableSelectionOnClick// handleRowAfterEdit  
                onRowEnter={console.log()}
                onRowClick={handleRowAfterEdit}//UpdateSubscription(event.target.value)}}
                />
	  	{/*

			*/}
                </div>
                  
                {/* Getting input value, Add, Delete functions */}
                <Button variant="outlined" onClick={() => { AddSubscription(getNewsletterValue); }} >Add Value</Button>
                <Button variant="outlined" onClick={() => { DeleteSubscription(getDeleteValue); }} >Remove Value</Button>  
              </div>
            </p>
        </div>
        <Infobar />
        <Footer />
        <Newsletter />
        <FooterBottom />
      </React.Fragment>
    </Container>
  </div>
    
  );
   
}

export default App;
