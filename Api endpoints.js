const express=require('express');
const bodyparser=require('body-parser');
const cors=required('cors');
const fs=required('fs');

const app=express();
const PORT=5000;

app.use(cors());
app.use(bodyParser.json());

const dataFilePath='./data/pokemonUsers.json';

//Helper function to read data from the file
const readData=()=>{
    const data=fs.readFileSync(dataFilePath);
    return JSON.parse(data);
};

//Helper function to write data to file
const writeData=(data)=>{
    fs.writeFileSync(dataFilePath,JSON.stringify(data,null,2));
};

//API endpoints
app.get('/api/pokemon-owners',(req,res)=>{
    const data=readData();
    res.json(data);
});

app.post('/api/pokemon-owners',(req,res) => {
    const data=readData();
    const newOwner=req.body;
    data.push(newOwner);
    writeData(data);
    res.status(201).json(newOwner);
});

app.put('/api/pokemon-owner/:id',(req,res) =>{
    const data=readData();
    const {id}=req.params;
    const updatedOwner=req.body;
    const index=data.findIndex((owner)=>owner.id == id);
    if(index !==-1){
        data[index]=updatedOwner;
        writeData(data);
        res.json(updatedOwner);
    } else {
        res.status(404).json({message:'Owner not found'});
    }
});

app.delete('/api/pokemon-owner/:id',(req,res)=> {
    const data=readData();
    const {id} =req.params;
    const newData= data.filter((owner)=>owner.id!==id);
    writeData(newData);
    res.status(204).send();
});
app.listen(PORT,() => {
    console.log('Server is running on http://localhost:${PORT}');
});