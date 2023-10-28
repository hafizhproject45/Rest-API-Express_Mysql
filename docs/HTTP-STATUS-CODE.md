# HTTP STATUS CODE

### Succesful Response (2xx)

- 200 OK (GET, PATCH)
- 201 Created (POST, PUT)

### Client Error Response (4xx)

- 400 Bad Request //ada field yang tidak terisi
- 401 Unauthorized //user harus login ke aplikasi
- 403 Forbidden //sudah login tapi tidak diizinkan karena role nya
- 404 Not Found //mengkases API yang salah
- 405 Mehot not Allowed //method yang tidak diizinkan

### Server Error Response (5xx)

- 500 Internal Server Error

### Source
