// Logic for handling stubs
const getAllStubs = (req, res) => {
    res.json({ message: 'List of all stubs' });
};

const getStubById = (req, res) => {

        const stubId = req.params.id;
    
        res.status(200)
        .set({
            'Content-Type': 'application/json',
            'Cache-Control': 'no-cache',
            'X-Custom-Header': 'MyValue',
            'X-Powered-By':'Ashik'
          })
        .json({ id: stubId, created: true });

};

const insertStub = (req,res) => {
    if (!req.body.apiPath) {
        return res.status(400).json({
          status: 'error',
          message: 'Path is required',
          code: 'VALIDATION_ERROR'
        });
      }
      
      res.status(201)
      .set({
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache',
        'X-Custom-Header': 'MyValue',
        'X-Powered-By': 'Ashik'
      })
      .json({ message: 'Api added successfully!', created: true });
  
};

module.exports = { getAllStubs, getStubById, insertStub };
