const { Pool } = require("pg");

const AWS = require('aws-sdk');

const getUser = async() => {
  const ssm = new AWS.SSM();
  try {

    const parameter = await ssm.getParameter({ 
      Name: 'DBUSER', 
      WithDecryption: true 
    }).promise();
    const data = JSON.parse(parameter.Parameter.Value);
    console.log(data);
    return data; 
  } catch (e){
    return null
  }
}

const getDBName = async() => {
  const ssm = new AWS.SSM();
  try {

    const parameter = await ssm.getParameter({ 
      Name: 'DBNAME', 
      WithDecryption: true 
    }).promise();
    const data = JSON.parse(parameter.Parameter.Value);
    console.log(data);
    return data; 
  } catch (e){
    return null
  }
}

const getDBPass = async() => {
  const ssm = new AWS.SSM();
  try {

    const parameter = await ssm.getParameter({ 
      Name: 'DBPASS', 
      WithDecryption: true 
    }).promise();
    const data = JSON.parse(parameter.Parameter.Value);
    console.log(data);
    return data; 
  } catch (e){
    return null
  }
}

const getDBPort = async() => {
  const ssm = new AWS.SSM();
  try {

    const parameter = await ssm.getParameter({ 
      Name: 'DBPORT', 
      WithDecryption: true 
    }).promise();
    const data = JSON.parse(parameter.Parameter.Value);
    console.log(data);
    return data; 
  } catch (e){
    return null
  }
}

const getDBHost = async() => {
  const ssm = new AWS.SSM();
  try {

    const parameter = await ssm.getParameter({ 
      Name: 'DBHOST', 
      WithDecryption: true 
    }).promise();
    const data = JSON.parse(parameter.Parameter.Value);
    console.log(data);
    return data; 
  } catch (e){
    return null
  }
}


const pool = new Pool({
  user: getUser()||'dbadmin',
  database: getDBName()|| 'applicationdb',
  password: getDBPass() ||'database1407',
  port: getDBPort() || 5432,
  host: getDBHost() || "postgresql57db.csspkrtyfmqm.us-east-1.rds.amazonaws.com",
});

module.exports = { pool };