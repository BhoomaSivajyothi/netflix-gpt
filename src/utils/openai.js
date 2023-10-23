import OpenAI from 'openai';
// import { OPENAI_KEY } from './constants';

const openai = new OpenAI({
  apiKey:process.env.REACT_APP_OPEANAI_API ,// defaults to process.env["OPENAI_API_KEY"]
  dangerouslyAllowBrowser:true
});
 export default openai