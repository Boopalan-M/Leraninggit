const router = require("express").Router();
const Sample = require("../controllers/controllers")



    // Create a new Note
    // router.post('/Sample', Sample.create);

    // Retrieve all Notes
    router.post('/Sample', (req, res) =>
    {
        
        Sample.create(req,res)
        
    });


    // Retrieve a single Note with noteId
router.get('/Sample/finddata', (req, res) => {
    Sample.findingData(req, res)
});
    // // Update a Note with noteId
router.put('/Sample/updatevalue', (req, res) => {
    Sample.update(req, res)
});

    // // Delete a Note with noteId
    // router.delete('/Sample/:noteId', Sample.delete);
    module.exports = router;