import { PutCommand, ScanCommand } from "@aws-sdk/lib-dynamodb";
import dynamoDbClient from "../config/db.js";
import uuidv4 from 'uuidv4';

// will interact with db
export const ItemModel = {
    createItem: async (params) => {
        console.log('model: createItem')
        // create the command
        const command = new PutCommand({
            TableName: "Items",
            Item: {
                id: { S: uuidv4() },
                name: { S: itemData.name },
                price: { N: itemData.price.toString() },
                quantity: { N: itemData.quantity.toString() }
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