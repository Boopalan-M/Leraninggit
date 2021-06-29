
const Save = require('../../Common/Commonfile')
const Sample = require('../../models/note');

// Create and Save a new Note
const create = (req, res) => { // want to askkk
     console.log(req.body)
    if ((req.body.Title && req.body.Name) == "") {
        res.status(400).send({
            message: "Title can not be empty"
        });
    } else {
        let objectname = {
            Title: req.body.Title || "Untitled Note",
            Name: req.body.Name,
            Department: req.body.Department,
            Age: req.body.Age,
            MobileNo:req.body.MobileNo
        }

        // Save Note in the database
        Save.Save2(objectname, function(result) {
            if (!result.status) {
                return res.status(500).send({
                    message:"Please fill all the details"
                });
            }
            res.send({
                message: "Data inserted Successfully",
                Status:"true"
            });
            
        })
     
    }
};

// module.exports = { create }
const findingData = (req, res) => {
     
    Save.Findingdata((result1) => {
        
    if (!result1.status) {
        return res.status(500).send({
         message: err.message || "Some error occurred while creating the Note."
         });
     }
     res.send(result1.data);
     
 })
};
const update = (req, res) => {
    console.log(req.body);
    if ((req.body.Title && req.body.Name) == "") {
        res.status(400).send({
            message: "Title can not be empty"
        });
    } else {
        let objectname = {
            // _id: req.body._id,
            Title: req.body.Title || "Untitled Note",
            Name: req.body.Name,
            Department: req.body.Department,
            Age: req.body.Age,
        
        }
        console.log("objectname",objectname);
        Save.UpdatingData(req.body.id, objectname, (result2) => {
        console.log(result2,"ddddddddddddd")
            if (!result2.status) {
                return res.send({
                    message:"Please fill all the details"
                });
            }
            Sample.findById( req.body.id)
            .exec(function(err,data){
               // do stuff
            // })
                console.log("err =>",err);
                res.send({
                    message: "Data updated Successfully"+data,
                    Status:"true"
                });
            })
           
            
      })
    }

}




module.exports = { create,findingData,update } 