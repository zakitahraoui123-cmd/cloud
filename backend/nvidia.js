import axios from "axios";

  async function translite(message){
        const nividiaAPI="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"

      try {
    const response = await axios.post(
      "https://integrate.api.nvidia.com/v1/chat/completions", // Endpoint الصحيح
      {
          "model": "nvidia/riva-translate-4b-instruct-v1.1",
        messages: [{content: `${message}`, role: 'user'}],

            "temperature": 0,
            "top_p": 0.9,
            "frequency_penalty": 0,
            "presence_penalty": 0,
            "max_tokens": 512,
            "stream": false
      },
      {
        headers: {
          Authorization: `Bearer ${nividiaAPI}`,
          "Content-Type": "application/json"
        }
      }
    );

    const convertText=response.data.choices[0].message.content
    return convertText
  } catch (err) {
    console.log(err.response?.data || err.message);
    
  }

  }


export default translite;