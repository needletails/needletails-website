export default defineEventHandler(async (event) => {
  return {
    message: 'Welcome to NeedleTails API!',
    timestamp: new Date().toISOString(),
    status: 'success'
  }
}) 