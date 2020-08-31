function catchErrors(error, displayError) {
  let errorMsg
  if (error.response) {
    // resquest was made, status code not in the 2XX range
    errorMsg = error.response.data
    console.error('Error response', errorMsg)

    // For Cloudinary Image Uploads
    if (error.response.data.error) {
      errorMsg = error.response.data.error.message
    }
  } else if (error.request) {
    // request was made, noresponse received
    errorMsg = error.request
    console.error('Error request', errorMsg)
  } else {
    // something else happened that triggered an error
    errorMsg = error.errorMessage
    console.error('Error message', errorMsg)
  }
  displayError(errorMsg)
}

export default catchErrors
