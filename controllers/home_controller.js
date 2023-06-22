const Task = require('../models/task');

module.exports.home = function (req, res) {
    Task.find({}).then(function (fetch_task) {
        return res.render('home', {
            title: "To-Do",
            task_list: fetch_task
        });
    });
}

module.exports.add = function (req, res) {
    Task.create(req.body);
    return res.redirect('back');
};

module.exports.delete = function (req, res) {
    for (let id in req.query) {
        Task.findByIdAndDelete(id)
            // .then(function (models) {
            //     console.log(models);
            // })
            .catch(function (err) {
                console.log(err);
            });
    }
    return res.redirect('back');
};



//  this is depricated So, its not work

// module.exports.delete = function (req, res) {
//     for (let id in req.query) {
//         Task.findByIdAndDelete(id, function (err) {
//             if (err) {
//                 console.log("error in deleting an object from DB");
//                 return;
//             }
//             return res.redirect('back');
//         });
//     }
//     // console.log(req.query);
// };
