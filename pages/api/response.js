
const token = process.env.TF_TOKEN_READ_RESPONSES

const wait = async (ms) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
}

const getResponse = async (formId, responseId) => {
  const endpoint = `https://api.typeform.com/forms/${formId}/responses`
  return await fetch(`${endpoint}?included_response_ids=${responseId}`, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  })
}

const retryGetResponse = async (formId, responseId) => {
  let result
  let data = {}
  let totalItems = 0
  let counter = 1

  while (totalItems === 0 && counter < 5) {
    console.log('request', counter)
    result = await getResponse(formId, responseId)
    data = await result.json()
    totalItems = data.total_items
    await wait(1000)
    counter += 1
  }

  return result.ok ? data : null
}

const api = async (req, res) => {
  if (!token) {
    const errorMessage = 'Please set your token into env var $TF_TOKEN_READ_RESPONSES'
    console.error(errorMessage)
    return res.status(500).json({ message: errorMessage })
  }

  const {id, response_id} = req.query

  const data = await retryGetResponse(id, response_id)

  if (!data) {
    return res.status(500).json({ message: 'error white fetching from api' })
  }

  const response = data.items[0]
  if (!response) {
    return res.status(404).json({ message: 'response not found' })
  }

  const getAnswer = (ref, type) => {
    const answer = response.answers.find(answer => answer.field.ref === ref)
    return answer && answer[type] || ''
  }

  console.log('response.answers', response.answers)

  const name = getAnswer('name', 'text')
  const rating = getAnswer('rating', 'number')

  res.status(200).json({ name, rating })
}

export default api
