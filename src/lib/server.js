export const handleServerError = (error, fieldData = {}) => {
  // Check for network or server-down errors
  if (
    error.code === 'ECONNABORTED' ||
    error.message.includes('Network Error')
  ) {
    return {
      success: false,
      message: 'Internal server error. Please try again later.',
      fieldData,
    };
  }

  // For response errors (status codes 4xx or 5xx)
  if (error.response) {
    return {
      success: false,
      ...error.response.data, // Keep original server response data
      fieldData,
    };
  }

  // Catch-all for unexpected errors
  return {
    success: false,
    message: 'An unexpected error occurred. Please try again.',
    fieldData,
  };
};
