import { Pinecone } from '@pinecone-database/pinecone';
import dotenv from 'dotenv'

dotenv.config()

const pc = new Pinecone({
  apiKey:process.env.PINCOINE_API_KEY
});
const check =await pc.listIndexes();
const exist =check.indexes.find(item=>item.name===process.env.INDEXNAME)
if(!exist){
try {
  
await pc.createIndex({
  name: process.env.INDEXNAME,
  vectorType: 'dense',
  dimension: 512,
  metric: 'cosine',
  spec: {
    serverless: {
      cloud: 'aws',
      region: 'us-east-1'
    }
  },
  deletionProtection: 'disabled',
  tags: { environment: 'development' }, 
});
  
} catch (error) {
  console.log(error)
}
}
export default pc;