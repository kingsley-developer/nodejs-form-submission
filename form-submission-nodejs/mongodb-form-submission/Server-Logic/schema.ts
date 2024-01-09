import mongoose from "mongoose"

mongoose.set('strictQuery', true)

const customerSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    }, 
    lastName: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true,
        min: 18,
        max: 50,
        validate:{
            validator: function(x: number){
                return x >= 18 ?? x <=50 
            },
            message: (e: any) => {
                return `${e.value}yrs is not allowed you have to be 18 yrs and above and the limit age is 50yrs`
               }
        }
    },
    password: {
        type: String,
        required: true,
        maxLength: 350
    },
    country: {
        type: String,
        required: true
    },
    alive: {
        type: Boolean,
        default: true
    },
    occupation: {
        type: String,
        required: true
    }
}
)
export default mongoose.model("customers", customerSchema)