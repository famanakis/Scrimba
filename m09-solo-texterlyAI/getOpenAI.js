//post and fetch from openAI
//user will need to put their own API key in the const API_KEY below
export async function getOpenAI(userInput) {
    const API_ENDPOINT = 'https://api.openai.com/v1/edits'
    const API_KEY = 'your API key here'

    const data = {
    model: 'text-davinci-edit-001',
    input: userInput,
    instruction: 'Fix the spelling mistakes',
    temperature: .55,
    }

    const options = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`,
    },
    body: JSON.stringify(data),
    }

    try {
        const response = await fetch(API_ENDPOINT, options)
        const data_1 = await response.json()
        const responseAI = data_1.choices[0].text.trim()
        // console.log(responseAI)
        return responseAI
    } catch (error) {
        console.error(error)
        throw error
    }
}