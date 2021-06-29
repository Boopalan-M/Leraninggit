const Sample = require('../models/note');
const Save2 = (inputObj, callback) => {
    // Save Note in the database
     const Save = new Sample(inputObj)
    Save.save()
        .then(data => {   // DATA IS A PARAMETER
            callback({status:true, data:data});
        }).catch(err => {
            callback({status:false, data:[err]});
        });
}

// module.exports = { Save2 }


const Findingdata = (callback) => {

    // const Save = new Sample()

    Sample.find()
        .then(data => {   // DATA IS A PARAMETER
        console.log(data,"@@@@@@@");
        callback({status:true, data:data});
        }).catch(err => {
        console.log(err,"AAAAAAAAAAA");
        callback({status:false, data:[]});
    });
}
 
const UpdatingData = (id, inputobject, callback) => {
    console.log(id,inputobject);
    // const Save = new Sample(inputobject)
    Sample.findByIdAndUpdate(id,inputobject)
    .then(data => {   // DATA IS A PARAMETER
        callback({status:true, data:data});
    }).catch(err => {
        callback({status:false, data:[err]});
    });
}


module.exports = { Save2,Findingdata,UpdatingData }
