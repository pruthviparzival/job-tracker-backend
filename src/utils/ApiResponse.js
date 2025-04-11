class ApiResponse {
  constructor(statusCode, payload, message) {
    this.statuscode = statusCode;
    this.payload = payload;
    this.message = message;
    this.success = statusCode < 400;
  }
}
export default ApiResponse;
