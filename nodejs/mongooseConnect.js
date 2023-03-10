const mongoose =require("mongoose");
const url = "mongodb://0.0.0.0:27017/Social" ;
const userSchema = new mongoose.Schema
(
    {
        id: Number,
        name: String,
        email: String,
    },
     {id:false}
);
const User = new mongoose.model ("users" , userSchema);
async function run()
{
    try
    {
        await mongoose. connect ( url);
        const user = User({ name: "Tejas", email: "Tejas@gma.com", id: 69 });
        await user. save ()
        const docs = await User. find ({});
        docs. forEach ( (doc) => console. log (doc) )
    }  
     catch (error)
    {
        console.error(error) ;
    }
    finally 
    {
        await mongoose. disconnect();
    }
}
run ();