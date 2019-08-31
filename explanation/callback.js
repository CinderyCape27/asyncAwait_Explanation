function requestHandler(req, res) {
    User.findById(req.userId, function(err, user) {
        if (err){
            res.send(err)
        } else {
            Task.findById(user.taskId, function(err, task){
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

