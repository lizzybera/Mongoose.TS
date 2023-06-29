import  {model, Schema, Document} from "mongoose"

export interface iShop extends Document {
    item?: string,
    quantity?: number,
    countryMade?: string,
}

const shopSchema: Schema<iShop> = new Schema({
    item : {
        type: String, required: [true, "please input item"], unique: true
    },
    quantity : {
        type : Number, required: [true, "please input quantity"]
    },
    countryMade : {
        type : String
    }
}, {
    timestamps : true
})

const shopModel = model<iShop>("shop", shopSchema)

export default shopModel
