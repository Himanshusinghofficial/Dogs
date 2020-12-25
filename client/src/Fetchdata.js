import React,{useEffect, useState} from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addLog } from '../src/actions/logActions';

const Fetchdata = ({addLog}) =>{
    let arr=['yoyo','Jumbo','Vango','Ginger','Rosco','Willow','Shaggy','Isaac','Artimus','Magnus','Feather','Kent','Spunk','Mint','Kalina','Shamu']
    const [info,setinfo] = useState('https://miro.medium.com/max/880/0*H3jZONKqRuAAeHnG.jpg');
    const [name, setname] = useState(' ');
    const [val, setval] = useState(' ');
    const [dogimg, setdogimg] = useState('');

    const onclick = () =>{
      let x = Math.floor((Math.random() * 15) + 1);
       fetch("https://dog.ceo/api/breeds/image/random")
        .then(response => response.json())
        .then(responseJson => {setinfo(responseJson.message)
         setval(arr[x])
        })
        .catch(error => console.log(error));

    }
    useState(()=>{
        onclick()
    })

    const onclick1 = () =>{
      let x = Math.floor((Math.random() * 15) + 1);
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(response => response.json())
        .then(responseJson => {
          setinfo(responseJson.message)
          setval(arr[x]) 
        })
        .catch(error => console.log(error));
        
        const newLog = {
            dogimg,
            name,
          };
        addLog(newLog);
    }

    useEffect(() => {
        setdogimg(info);
        setname(val);
    },[info,val])
   

    return (
        <div className="container">
            <div className="card br center">
                <h4>Dinger Match</h4>
            <div className="row"> 
              <img src={info} alt="dogs"></img>
            </div>
             <h4>{name}</h4>
            <div className="row center">
            <a href="/" onClick={onclick} style={{marginRight:'50px'}}><i class="far fa-thumbs-down fa-4x"></i></a>
            <a href="/" onClick={onclick1} style={{marginLeft:'50px'}}><i class="far fa-thumbs-up fa-4x"></i></a>

            </div>
            </div>
        </div>
    )
}

Fetchdata.propTypes = {
    addLog: PropTypes.func.isRequired
  };
  
  export default connect(
    null,
    { addLog }
  )(Fetchdata);
