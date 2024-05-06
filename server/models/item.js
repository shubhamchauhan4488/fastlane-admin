import { PutCommand, ScanCommand } from "@aws-sdk/lib-dynamodb";
import dynamoDbClient from "../config/db.js";
import { uuid } from 'uuidv4';

// will interact with db
export const ItemModel = {
    createItem: async ({name, price, quantity}) => {
        console.log('model: createItem')
        // create the command
        const uid = uuid()
        console.log('id:', uid)
        const command = new PutCommand({
            TableName: "Items",
            Item: {
                id: uid,
                name,
                price,
                quantity
            }
          });
        await dynamoDbClient.send(command);
    },

    getAllItems: async () => {
        console.log('model: getAllItems')
        const command = new ScanCommand({
            TableName: 'Items',
        })
        const data = await dynamoDbClient.send(command);
        return data.Items;
    }
}