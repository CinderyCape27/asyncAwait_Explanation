//----------------------CALLBACK---------------------------

function requestHandler(req, res) {
    user.findById(req.userId, function(err, user) {
        if (err){
            res.send(err)
        } else {
            Task.findById(user.taskId, function(err, tareas){
                if(err){
                    res.send(err)
                }else {
                    task.completed = true;
                    task.save(function(err){
                        if(err){
                            res.send(err);
                        } else {
                            res.send('Task completed');
                        }
                    })
                }
            })
        }
    }) 
}
// -------------------PROMISES----------------------------------------
function reqiestHandler(req, res) {
    User.findById(req.userId)
        .then(function(user) {
            return Tasks.findById(user.taskId)
        })
        .then(function(tasks) {
            tasks.completed = true;
            return task.save();
        })
        .then(function(){
            res.send('Task Completed')
        })
        .catch(function(errors) {
            res.send(errors)
        })
}
