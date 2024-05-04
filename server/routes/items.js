// // // routes/items.js
import * as itemController from '../controllers/itemController.js';
import express from 'express';
// // import dynamoDb from '../config/db.js';

const router = express.Router();

// // const client = new DynamoDBClient({});
// // const docClient = DynamoDBDocumentClient.from(client);
// // // router.get('/items', itemController.listAllItems);
// // // router.get('/items/:id', itemController.getItem);
// // // router.get('/items/:id', itemController.getItem);

// // // POST to add an item
// // router.post('/item', (req, res) => {
// //   console.log('post request received');
// //   const params = {
// //     TableName: 'Items',
// //     Item: {
// //       id: req.body.id,
// //       name: req.body.name,
// //       quantity: req.body.quantity,
// //     }
// //   };

// //   dynamoDb.put(params, (err, data) => {
// //     if (err) {
// //       res.status(500).send(err);
// //     } else {
// //       res.send({ success: true, message: 'Item added successfully', data: params.Item });
// //     }
// //   });
// // });

// // // GET an item by id
// // router.get('/item/:id', (req, res) => {
// //   const params = {
// //     TableName: 'Items',
// //     Key: {
// //       id: req.params.id,
// //     }
// //   };

// //   dynamoDb.get(params, (err, data) => {
// //     if (err) {
// //       res.status(500).send(err);
// //     } else if (data.Item) {
// //       res.send(data.Item);
// //     } else {
// //       res.status(404).send({ message: 'Item not found' });
// //     }
// //   });


// // });



// import dynamoDbClient from '../config/db.js';
// import { GetCommand, ScanCommand } from "@aws-sdk/lib-dynamodb";

// router.get('/items', async (req, res) => {
//     try {
//       const command = new ScanCommand({
//         TableName: "Items",
//       });
      
//       const response = await dynamoDbClient.send(command);
//       console.log(response);
//       res.json(response.Items);
//     } catch (err) {
//       console.error("Error details:", err?.message, err?.code);
//       res.status(500).json({ error: 'Could not load items', details: err?.message });
//     }
// });

// // GET an item by id
// router.get('/item/:id', async (req, res) => {
//   console.log('req', req.params)
//   try {
//     const command = new GetCommand({
//       TableName: 'Items',
//       Key: {
//         id: req.params.id,
//       }
//     });
    
//     const response = await dynamoDbClient.send(command);
//     console.log('response', response);
//     res.json(response);
//   } catch (err) {
//     console.error("Error details:", err?.message, err?.code);
//     res.status(500).json({ error: 'Could not load the item', details: err?.message });
//   }
// });

router.get('/items', itemController.fetchAllItems);
router.post('/items', itemController.createItem);

export default router;