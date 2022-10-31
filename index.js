import express from 'express';
import cors from 'cors'
const app = express();

app.use(cors());
app.get('/', (req, res) =>{
    const customers = [
        {id:1,firstname:'manny',lastname:'lualua'},
        {id:2,firstname:'manny2',lastname:'luala1'},
        {id:3,firstname:'manny3',lastname:'lualua7'},
    ];
    res.json(customers);
})

const PORT = 5000;
app.listen(PORT, () => console.log(`server started a on ${PORT}`));