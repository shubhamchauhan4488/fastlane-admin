
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";

// Bare-bones DynamoDB Client
const dynamoDbClient = new DynamoDBClient({ region: 'us-east-1'});

export default dynamoDbClient;