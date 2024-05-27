const app = require('./APIs.js')

const PORT = process.env.PORT || 10000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});