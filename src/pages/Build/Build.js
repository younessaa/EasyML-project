import React, { useState } from "react";
import axios from "axios";
import { Redirect , } from "react-router-dom";
import { Link } from "react-router-dom"
import buildlogo from '../../assets/images/build.png';
import emptylogo from '../../assets/images/v.png';
import { useParams } from "react-router-dom";
import "./Build.css";


var fileDownload = require('js-file-download');


function Build() {
  const { model_name } = useParams();

  const [PyData, setPyData] = useState();
  const [modelname, setName] = useState();
  const [features, setfeatures] = useState([]);
  const [targets, settargets] = useState([]);
  const [b, setB] = useState(false);
  
  const onInputChangeF = (e) => {
      setfeatures(e.target.files)
      
  };
  const onInputChangeT = (e) => {
      settargets(e.target.files)
  };
  const donothing =(e) => {

  }
  const download = (e) => {
    axios({
      url:"//localhost:5000/downloadfexmpl",
      method:"GET",
      responseType:"blob"
    }).then((res)=>{
      fileDownload(res.data,'featureexample.csv')
    })
    axios({
      url:"//localhost:5000/downloadtexmpl",
      method:"GET",
      responseType:"blob"
    }).then((res)=>{
      fileDownload(res.data,'targetexample.csv')
    })

    
  };
  const onSubmit = (e) => {
      e.preventDefault();
      const data = new FormData();
      console.log(model_name);
      data.append('model',model_name+'.py');
      data.append('modelname', modelname);
      data.append('features', features);
      data.append('targets', targets);
      console.log(data);
      for(let i = 0; i < features.length; i++) {
        data.append('features', features[i]);
      }
      for(let i = 0; i < targets.length; i++) {
        data.append('targets', targets[i]);
      }

      axios.post('//localhost:5000/buildmodel', data)
          .then((response) => {
              setPyData(response.data);
              setB(true);

          })
          .catch((e) => {
          })

  };
  
    return (
      <div className="containerb">
      <div className="sideb">
        <br></br>
        <label className="Modelb">{model_name}</label>
        <br></br><br></br><br></br><br></br>
        <div className="consdivb">
        <p style={{"fontSize": "33px"}}>Instructions : </p><br></br><br></br>
        <p style={{"textIndent":"30px"}}>&#10061; feature and target files should :</p><br></br>
        <p style={{"textIndent":"40px"}}>&#10061; have .csv extention.</p><br></br>
        <p style={{"textIndent":"40px"}}>&#10061; have the same number of lines.</p><br></br>
        <p style={{"textIndent":"30px"}}>&#10061; number of instances should be between 200 and 10 000.</p>
        </div>
      </div>
      <form className="sidebf">
        <div className="rowb">
          <p><Link to='/chosemodel' className="backb">&lt; back</Link></p>
        </div>
        <div className="rowb">
        <p><span className="buildyourb">Build your Random Forest Regression NOW!</span></p>
        </div>
        <div className="rowb" id="a">
        <div className="lineb"></div>
          <div className="modelnameb">
            <label >Model name :  </label>
            <input type="text" 
                onChange={event => {
                  const { value } = event.target;
                  setName(value);
                }} />
          </div>
          <div className="filesb">
            <div className="fileb">
              <label >Features : </label>
              <input
              id="J"
                type="file"
                name="features"
                accept=".csv"
                onChange={onInputChangeF}
              /> 

              
            </div>
            <div className="fileb">
              <label >Targets : </label>
              <input
                name="target"
                  id="J"
                  type="file"
                  accept=".csv"
                  size={10}
                  onChange={onInputChangeT}
              />
              
            </div>
          </div>
          
        </div>
        <div className="rowb">
          <div className="dowexb">
            <div className="lineb" id="S"></div>
            <button className="dexamplesb" type="button" onClick={(e)=>download(e)}>download examples</button>
            <div className="lineb" id="S"></div>
          </div>
          
        </div>
        <div className="rowb">
          <button className="buildb" id="b"  type="button" onClick={(e)=>donothing(e)}>parametres avancés</button>
        </div>
        <div className="rowb">
          <button type="submit" className="buildb" onClick={onSubmit} >
            <img src={emptylogo} alt="Logo" height={"35px"} ></img>
            <label id="u">BUILD</label>
            <img src={buildlogo} alt="Logo" height={"35px"}></img>   </button> 
        </div>
        <div className="rowb">
        </div>
      </form>
      
      {b==true && PyData.split("\r\n")}
        {b===true && <Redirect to={{pathname:"/Exploite/"+PyData.split("\r\n")[1] ,state:{ PyData: PyData , modelname :modelname }}}/>} 
       
        </div>
    );
  
  
  }
export default Build;