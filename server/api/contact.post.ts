import { createSuccessResponse, createErrorResponse } from '../utils/response'

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)
    
    // Validate required fields
    const { name, email, subject, message } = body
    
    if (!name || !email || !subject || !message) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Missing required fields'
      })
    }
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Invalid email format'
      })
    }
    
    // Here you would typically:
    // 1. Save to database
    // 2. Send email notification
    // 3. Log the contact request
    
    return createSuccessResponse(
      { id: Date.now() },
      'Contact form submitted successfully'
    )
    
  } catch (error: any) {
    console.error('Contact form error:', error)
    
    if (error.statusCode) {
      throw error
    }
    
    throw createError({
      statusCode: 500,
      statusMessage: 'Internal server error'
    })
  }
}) 