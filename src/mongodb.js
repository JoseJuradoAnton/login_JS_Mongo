const mongoose= require('mongoose')

const user = 'test_admin'
const password = 'Jurado123'
const db = 'login'
const uri = `mongodb+srv://${user}:${password}@cluster0.mitpxkz.mongodb.net/${db}?retryWrites=true&w=majority`

mongoose.connect(uri,
{useNewUrlParser:true,useUnifiedTopology:true}
)

.then(()=>console.log('Base de datos conectada'))
.catch(e=>console.log(e))

//Crear los esquemas
const LogInSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const collection=new mongoose.model("Collection1",LogInSchema)

module.exports=collection